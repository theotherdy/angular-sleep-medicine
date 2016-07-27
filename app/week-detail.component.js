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
var components_1 = require('angular2-fontawesome/components');
var week_1 = require('./week');
var lecture_type_pipe_1 = require('./lecture-type.pipe');
var description_formatter_pipe_1 = require('./description-formatter.pipe');
var WeekDetailComponent = (function () {
    function WeekDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', week_1.Week)
    ], WeekDetailComponent.prototype, "week", void 0);
    WeekDetailComponent = __decorate([
        core_1.Component({
            selector: 'week-detail-component',
            templateUrl: 'app/week-detail.component.html',
            directives: [components_1.FaComponent],
            styleUrls: ['app/week-detail.component.css'],
            pipes: [lecture_type_pipe_1.LectureTypePipe, description_formatter_pipe_1.DescriptionFormatterPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], WeekDetailComponent);
    return WeekDetailComponent;
}());
exports.WeekDetailComponent = WeekDetailComponent;
//# sourceMappingURL=week-detail.component.js.map