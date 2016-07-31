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
    //private _previousModyuleId: string;
    function WeekComponent(
        //private router: Router,
        //private routeParams: RouteParams,
        weekService) {
        this.weekService = weekService;
    }
    WeekComponent.prototype.ngOnInit = function () {
    };
    WeekComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        //console.log(changes);
        if (changes['modyule'] !== undefined) {
            var activeWeekSet = false;
            //go and get week data for this modyule
            this.weekService.getWeeks(changes['modyule'].currentValue.siteUrl)
                .switchMap(function (weeks) { return _this.weekService.getWeeksDetails(weeks); })
                .subscribe(function (weeks) {
                _this.weeks = weeks;
                for (var _i = 0, _a = _this.weeks; _i < _a.length; _i++) {
                    var week = _a[_i];
                    var currentDate = new Date();
                }
                if (!activeWeekSet) {
                    _this.weeks[0].active = true;
                }
            }, function (error) { return _this.errorMessage = error; });
        }
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