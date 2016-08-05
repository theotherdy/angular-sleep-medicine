import { Component, Input, OnInit } from '@angular/core';

import { FaComponent } from 'angular2-fontawesome/components';

import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

import {CORE_DIRECTIVES} from '@angular/common';
import { Observable }     from 'rxjs/Observable';

import { Week } from './week';
import { LectureTypePipe } from './lecture-type.pipe';
import { DescriptionFormatterPipe } from './description-formatter.pipe';
import { WeekService } from './week.service';
import { Lecture } from './lecture';

@Component({
    selector: 'week-detail-component',
    templateUrl: 'app/week-detail.component.html',
    directives: [FaComponent,CollapseDirective],
    styleUrls:  ['app/week-detail.component.css'],
    pipes: [LectureTypePipe, DescriptionFormatterPipe],
    providers: [WeekService]
})

export class WeekDetailComponent implements OnInit{ 
    @Input()
    week: Week;
    lecturesObservable: Observable<Week>;
    
    error: any;
    errorMessage: string;
    
    public isCollapsed:boolean = true;
    
    constructor(
        private weekService: WeekService) {
    }
    
    ngOnInit() {
        this.lecturesObservable = this.weekService.getWeekLesson(this.week)
            .cache()
            .map(week=>{
                this.week.lectures = week.lectures;
                this.week.seminars = week.seminars;
                console.log(week);
                return week;
            })
            .switchMap(week => this.weekService.getLecturesDetails(this.week))
            .cache()
            .map(week=>{
                this.week.lectures = week.lectures;
                this.week.seminars = week.seminars;
                return week;
            });
            /*.subscribe(
                week => {
                    this.week.lectures = week.lectures;
                    },
                error =>  this.errorMessage = <any>error
            );*/
    }
}