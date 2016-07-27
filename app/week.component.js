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
var week_detail_component_1 = require('./week-detail.component');
var WeekComponent = (function () {
    function WeekComponent() {
    }
    //private _previousModyuleId: string;
    WeekComponent.prototype.ngOnChanges = function (changes) {
        //run through weeks and if none active, set first to active
        console.log(changes);
        if (changes['modyule'] !== undefined) {
            var activeWeekSet = false;
            for (var _i = 0, _a = changes['modyule'].currentValue.weeks; _i < _a.length; _i++) {
                var week = _a[_i];
                var currentDate = new Date();
                if (currentDate >= week.startDate && currentDate <= week.endDate) {
                    //this is the current Week
                    week.active = true;
                    activeWeekSet = true;
                }
            }
            if (!activeWeekSet) {
                changes['modyule'].currentValue.weeks[0].active = true;
            }
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
        }), 
        __metadata('design:paramtypes', [])
    ], WeekComponent);
    return WeekComponent;
}());
exports.WeekComponent = WeekComponent;
//# sourceMappingURL=week.component.js.map