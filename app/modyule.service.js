"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var modyule_1 = require('./modyule');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var lecture_1 = require('./lecture');
require('./rxjs-operators'); // Add the RxJS Observable operators we need in this app.
//import { MODYULES } from './mock-modyules';
var myGlobals = require('./globals');
var ModyuleService = (function () {
    function ModyuleService(http) {
        this.http = http;
        this.modyulesUrl = myGlobals.entityBrokerBaseUrl + myGlobals.urlToSpecifyPortal + myGlobals.baseSitePath + myGlobals.suffixForTestingOnly;
    }
    ModyuleService.prototype.getModyules = function () {
        return this.http.get(this.modyulesUrl)
            .map(this.initialiseModyules)
            .catch(this.handleError);
    };
    ModyuleService.prototype.getModyulesDetails = function (modyules) {
        var calls = [];
        for (var _i = 0, modyules_1 = modyules; _i < modyules_1.length; _i++) {
            var modyule = modyules_1[_i];
            calls.push(this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json').cache());
            calls.push(this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.contentUrl + modyule.siteId + '.json').cache());
        }
        var subject = new Subject_1.Subject(); //see: http://stackoverflow.com/a/38668416/2235210 for why Subject   
        Observable_1.Observable.forkJoin(calls).subscribe(function (res) {
            var _loop_1 = function(response) {
                //Note this is a really very awkward way of matching modyule with a siteId assigned in getModyules (above) with the correct response from forkJoin (could come back in any order), by looking at the requested url from the response object
                var foundModyule = modyules.find(function (modyule) {
                    //let modyuleUrl = myGlobals.entityBrokerBaseUrlForLocalOnly+myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json';
                    return response.url.indexOf(modyule.siteId) != -1;
                });
                var bodyAsJson = JSON.parse(response._body);
                if (response.url.indexOf(myGlobals.lessonsUrl) != -1) {
                    foundModyule.name = bodyAsJson.lessons_collection[0].lessonTitle;
                    foundModyule.lessonUrl = bodyAsJson.lessons_collection[0].contentsURL;
                }
                else if (response.url.indexOf(myGlobals.contentUrl) != -1) {
                    //find folder caled Start date and get the date from its description
                    var startFolder = bodyAsJson.content_collection[0].resourceChildren.find(function (folder) {
                        //let modyuleUrl = myGlobals.entityBrokerBaseUrlForLocalOnly+myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json';
                        return folder.name.toLowerCase() === 'start date';
                    });
                    foundModyule.startDate = new Date(startFolder.description);
                }
            };
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var response = res_1[_i];
                _loop_1(response);
            }
            subject.next(modyules);
        });
        return subject;
    };
    /**
    * For modyules-resources component to get details of the materials inside it
    */
    ModyuleService.prototype.getModyuleLesson = function (modyule) {
        var lessonUrl = modyule.lessonUrl.replace(myGlobals.unneededPartOfUrlForLessonCalls, '');
        return this.http.get(myGlobals.entityBrokerBaseUrl + lessonUrl + '.json')
            .cache()
            .map(this.processLessons)
            .catch(this.handleError);
    };
    ModyuleService.prototype.initialiseModyules = function (res) {
        var body = res.json();
        var modyulesToReturn = [];
        for (var _i = 0, _a = body.subsites; _i < _a.length; _i++) {
            var site = _a[_i];
            if (site.siteUrl.indexOf('mod') != -1) {
                var tempModyule = new modyule_1.Modyule;
                tempModyule.siteId = site.siteId;
                tempModyule.siteUrl = site.siteUrl;
                modyulesToReturn.push(tempModyule);
            }
        }
        return modyulesToReturn;
    };
    ModyuleService.prototype.processLessons = function (res) {
        var modyuleToReturn = new modyule_1.Modyule;
        var body = res.json();
        //first deal with lectures
        var lecturesPage = body.contentsList.find(function (subPage) {
            return subPage.name.toLowerCase() === 'lectures';
        });
        modyuleToReturn.supplementaryLectures = new Array();
        for (var _i = 0, _a = lecturesPage.contentsList; _i < _a.length; _i++) {
            var lectureData = _a[_i];
            var lecture = new lecture_1.Lecture;
            lecture.type = 'main'; //because it's within a week
            lecture.name = lectureData.name;
            lecture.id = lectureData.id;
            for (var _b = 0, _c = lectureData.contentsList; _b < _c.length; _b++) {
                var lectureDetail = _c[_b];
                if (lectureDetail.name.toLowerCase() == 'lecture link') {
                    lecture.url = lectureDetail.url;
                }
                else if (lectureDetail.name.toLowerCase() == 'learning outcomes') {
                    lecture.learningOutcomesUrl = lectureDetail.contentsURL;
                }
                else if (lectureDetail.type == 5) {
                    if (lectureDetail.html.indexOf('data-directory') == -1) {
                        //standard html text content - assuming the lecture description
                        lecture.description = lectureDetail.html;
                    }
                    else {
                        //link to a resources folder
                        //extract the url from the .html property: data-directory='\/group\/c3254610-b325-4a0c-8d1a-c817099eb5fe\/\/Lecture 1\/'
                        var posDataDirectory = lectureDetail.html.indexOf("data-directory");
                        var posFirstApostrophe = lectureDetail.html.indexOf("'", posDataDirectory);
                        var posLastApostrophe = lectureDetail.html.indexOf("'", posFirstApostrophe + 1);
                        lecture.resourcesUrl = lectureDetail.html.substr(posFirstApostrophe + 1, posLastApostrophe - posFirstApostrophe - 1);
                        if (lecture.resourcesUrl.charAt(lecture.resourcesUrl.length - 1) == "/") {
                            lecture.resourcesUrl = lecture.resourcesUrl.substring(0, lecture.resourcesUrl.length - 1);
                        }
                    }
                }
            }
            modyuleToReturn.supplementaryLectures.push(lecture);
        }
        return modyuleToReturn;
    };
    ModyuleService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ModyuleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ModyuleService);
    return ModyuleService;
}());
exports.ModyuleService = ModyuleService;
//# sourceMappingURL=modyule.service.js.map