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
require('./rxjs-operators'); // Add the RxJS Observable operators we need in this app.
//import { MODYULES } from './mock-modyules';
var myGlobals = require('./globals');
var ModyuleService = (function () {
    function ModyuleService(http) {
        var _this = this;
        this.http = http;
        this.modyulesUrl = myGlobals.entityBrokerBaseUrl + myGlobals.urlToSpecifyPortal + myGlobals.baseSitePath + myGlobals.suffixForTestingOnly;
        this.getModyuleLessons = function (res) {
            var body = res.json();
            var observableBatch = [];
            var modyulesToReturn = [];
            var _loop_1 = function(site) {
                if (site.siteUrl.indexOf('mod') != -1) {
                    var tempModyule_1 = new modyule_1.Modyule;
                    tempModyule_1.siteId = site.siteId;
                    tempModyule_1.sitePath = site.siteUrl;
                    _this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + site.siteId + '.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        tempModyule_1.name = res.lessons_collection[0].lessonTitle;
                        modyulesToReturn.push(tempModyule_1);
                    });
                }
            };
            for (var _i = 0, _a = body.subsites; _i < _a.length; _i++) {
                var site = _a[_i];
                _loop_1(site);
            }
            return modyulesToReturn;
        };
    }
    ModyuleService.prototype.getModyules = function () {
        return this.http.get(this.modyulesUrl)
            .map(this.getModyuleLessons)
            .catch(this.handleError);
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