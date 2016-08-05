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