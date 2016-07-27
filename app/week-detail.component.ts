import { Component, Input } from '@angular/core';

import { FaComponent } from 'angular2-fontawesome/components';

import {CORE_DIRECTIVES} from '@angular/common';

import { Week } from './week';
import { LectureTypePipe } from './lecture-type.pipe';
import { DescriptionFormatterPipe } from './description-formatter.pipe';

@Component({
    selector: 'week-detail-component',
    templateUrl: 'app/week-detail.component.html',
    directives: [FaComponent],
    styleUrls:  ['app/week-detail.component.css'],
    pipes: [LectureTypePipe, DescriptionFormatterPipe]
})

export class WeekDetailComponent { 
    @Input()
    week: Week;
}