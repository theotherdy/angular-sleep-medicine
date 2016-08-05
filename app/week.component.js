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
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var modyule_1 = require('./modyule');
var week_service_1 = require('./week.service');
var week_detail_component_1 = require('./week-detail.component');
var WeekComponent = (function () {
    function WeekComponent(weekService) {
        var _this = this;
        this.weekService = weekService;
        this.updateWeek = function (newModyule) {
            var activeWeekSet = false;
            //go and get week data for this modyule
            _this.weeksObservable = _this.weekService.getWeeks(newModyule.siteUrl)
                .map(function (weeks) {
                console.log(weeks);
                return weeks;
            })
                .switchMap(function (weeks) { return _this.weekService.getWeeksDetails(weeks); })
                .map(function (weeks) {
                //first sort them into name order
                weeks.sort(_this.compareByWeekName);
                _this.modyule.weeks = weeks;
                var startDateOfThisWeek = new Date(_this.modyule.startDate.getTime()); //get date value not reference to original
                for (var _i = 0, _a = _this.modyule.weeks; _i < _a.length; _i++) {
                    var week = _a[_i];
                    var startDateOfNextWeek = new Date(startDateOfThisWeek.getTime());
                    startDateOfNextWeek.setDate(startDateOfNextWeek.getDate() + 7);
                    console.log(startDateOfThisWeek, startDateOfNextWeek);
                    var currentDate = new Date();
                    if (currentDate >= startDateOfThisWeek && currentDate <= startDateOfNextWeek) {
                        //this is the current Week
                        week.active = true;
                        activeWeekSet = true;
                    }
                    startDateOfThisWeek = startDateOfNextWeek;
                    week.modyule = _this.modyule;
                }
                if (!activeWeekSet) {
                    _this.modyule.weeks[0].active = true;
                }
                return weeks;
            })
                .cache();
            /*.subscribe(
                weeks => {
                    //first sort them into name order
                    weeks.sort(this.compareByWeekName);
                    this.modyule.weeks = weeks;
                    let startDateOfThisWeek = new Date(this.modyule.startDate.getTime());  //get date value not reference to original
                    for(var week of this.modyule.weeks){
                        let startDateOfNextWeek: Date = new Date(startDateOfThisWeek.getTime());
                        startDateOfNextWeek.setDate(startDateOfNextWeek.getDate() + 7);
                        console.log(startDateOfThisWeek,startDateOfNextWeek);
                        let currentDate: Date = new Date();
                        if(currentDate >= startDateOfThisWeek && currentDate <= startDateOfNextWeek){
                            //this is the current Week
                            week.active = true;
                            activeWeekSet = true;
                        }
                        startDateOfThisWeek = startDateOfNextWeek;
                    }
                    if(!activeWeekSet){
                        this.modyule.weeks[0].active = true;
                    }
                },
                error =>  this.errorMessage = <any>error
            ); */
        };
    }
    WeekComponent.prototype.ngOnInit = function () {
        //this.updateWeek(this.modyule);
    };
    WeekComponent.prototype.ngOnChanges = function (changes) {
        //console.log(changes);
        if (changes['modyule'] !== undefined) {
            //if(modyule !== undefined){  //as it will be when this is called at component init
            var activeWeekSet = false;
            //go and get week data for this modyule
            //if(this.modyule.weeks === undefined || this.modyule.weeks.length == 0 ){  //only update if we don't already have the data
            this.updateWeek(this.modyule);
        }
    };
    WeekComponent.prototype.compareByWeekName = function (weekA, weekB) {
        return weekA.name.localeCompare(weekB.name, undefined, { numeric: true, sensitivity: 'base' }); //sort function to naturally sort strings: http://stackoverflow.com/a/38641281/2235210
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', modyule_1.Modyule)
    ], WeekComponent.prototype, "modyule", void 0);
    WeekComponent = __decorate([
        core_1.Component({
            selector: 'weeks-component',
            templateUrl: 'app/week.component.html',
            directives: [week_detail_component_1.WeekDetailComponent, ng2_bootstrap_1.TAB_DIRECTIVES, common_1.CORE_DIRECTIVES],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styleUrls: ['app/week.component.css'],
            providers: [week_service_1.WeekService]
        }), 
        __metadata('design:paramtypes', [week_service_1.WeekService])
    ], WeekComponent);
    return WeekComponent;
}());
exports.WeekComponent = WeekComponent;
//# sourceMappingURL=week.component.js.map