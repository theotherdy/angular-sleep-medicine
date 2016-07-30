import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChange} from '@angular/core';

import {CORE_DIRECTIVES} from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { Modyule } from './modyule';
import { WeekDetailComponent } from './week-detail.component';

@Component({
    selector: 'weeks-component',
    templateUrl: 'app/week.component.html',
    directives: [WeekDetailComponent,TAB_DIRECTIVES, CORE_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls:  ['app/week.component.css'],
})

export class WeekComponent implements OnChanges{ 
    @Input() modyule: Modyule;

    //private _previousModyuleId: string;

    

    ngOnInit() {
        
    }


    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        this.weekService.getWeeks()
             .subscribe(
                modyules => {
                    this.modyules = modyules
                    },
               error =>  this.errorMessage = <any>error);



        //run through weeks and if none active, set first to active
        console.log(changes);
        if(changes['modyule'] !== undefined){  //as it will be when this is called at component init
            var activeWeekSet = false;
            for(var week of changes['modyule'].currentValue.weeks){
                let currentDate: Date = new Date();
                if(currentDate >= week.startDate && currentDate <= week.endDate){
                    //this is the current Week
                    week.active = true;
                    activeWeekSet = true;
                }
            }
            if(!activeWeekSet){
                changes['modyule'].currentValue.weeks[0].active = true;
            }
        }
    }

}