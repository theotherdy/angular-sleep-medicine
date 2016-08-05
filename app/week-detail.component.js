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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var week_1 = require('./week');
var lecture_type_pipe_1 = require('./lecture-type.pipe');
var description_formatter_pipe_1 = require('./description-formatter.pipe');
var week_service_1 = require('./week.service');
var WeekDetailComponent = (function () {
    function WeekDetailComponent(weekService) {
        this.weekService = weekService;
        this.isCollapsed = true;
    }
    WeekDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lecturesObservable = this.weekService.getWeekLesson(this.week)
            .cache()
            .map(function (week) {
            _this.week.lectures = week.lectures;
            _this.week.seminars = week.seminars;
            console.log(week);
            return week;
        })
            .switchMap(function (week) { return _this.weekService.getLecturesDetails(_this.week); })
            .cache()
            .map(function (week) {
            _this.week.lectures = week.lectures;
            _this.week.seminars = week.seminars;
            return week;
        });
        /*.subscribe(
            week => {
                this.week.lectures = week.lectures;
                },
            error =>  this.errorMessage = <any>error
        );*/
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', week_1.Week)
    ], WeekDetailComponent.prototype, "week", void 0);
    WeekDetailComponent = __decorate([
        core_1.Component({
            selector: 'week-detail-component',
            templateUrl: 'app/week-detail.component.html',
            directives: [components_1.FaComponent, ng2_bootstrap_1.CollapseDirective],
            styleUrls: ['app/week-detail.component.css'],
            pipes: [lecture_type_pipe_1.LectureTypePipe, description_formatter_pipe_1.DescriptionFormatterPipe],
            providers: [week_service_1.WeekService]
        }), 
        __metadata('design:paramtypes', [week_service_1.WeekService])
    ], WeekDetailComponent);
    return WeekDetailComponent;
}());
exports.WeekDetailComponent = WeekDetailComponent;
//# sourceMappingURL=week-detail.component.js.map