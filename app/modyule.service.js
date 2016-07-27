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
var mock_modyules_1 = require('./mock-modyules');
var myGlobals = require('./globals');
var ModyuleService = (function () {
    function ModyuleService() {
    }
    /**
    * get list of Modyules (sites) from WebLearn
    *
    * @todo Deal with edge cases e.g before Week 1 of the modyule or after the end
    */
    ModyuleService.prototype.getModyules = function () {
        //let's run through our modules and look at the dates of our weeks
        //set .currentWeek property of the modyule to the Week.id if it contains a current week - complex thing will be edge cases
        for (var _i = 0, MODYULES_1 = mock_modyules_1.MODYULES; _i < MODYULES_1.length; _i++) {
            var modyule = MODYULES_1[_i];
            modyule.startDate = new Date('2099-12-31T23:59:59.999Z');
            modyule.endDate = new Date('2000-01-01T00:00:00.000Z');
            for (var _a = 0, _b = modyule.weeks; _a < _b.length; _a++) {
                var week = _b[_a];
                if (week.startDate < modyule.startDate) {
                    modyule.startDate = week.startDate;
                }
                if (week.endDate > modyule.endDate) {
                    modyule.endDate = week.endDate;
                }
            }
            var currentDate = new Date();
            if (currentDate >= modyule.startDate && currentDate <= modyule.endDate) {
                //this is the currentModyule
                myGlobals.currentModyule = modyule.siteId;
            }
        }
        //Now that we know all the start and end dates
        return Promise.resolve(mock_modyules_1.MODYULES);
    };
    ModyuleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ModyuleService);
    return ModyuleService;
}());
exports.ModyuleService = ModyuleService;
//# sourceMappingURL=modyule.service.js.map