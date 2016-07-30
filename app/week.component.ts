import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChange} from '@angular/core';

import {CORE_DIRECTIVES} from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { Modyule } from './modyule';
import { Week } from './week';
import { WeekService } from './week.service';
import { WeekDetailComponent } from './week-detail.component';

@Component({
    selector: 'weeks-component',
    templateUrl: 'app/week.component.html',
    directives: [WeekDetailComponent,TAB_DIRECTIVES, CORE_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls:  ['app/week.component.css'],
    providers: [WeekService]
})

export class WeekComponent implements OnChanges{ 
    @Input() modyule: Modyule;
    
    weeks: Week[];
    error: any;
    //week: Week;
    
    errorMessage: string;

    //private _previousModyuleId: string;

    constructor(
        //private router: Router,
        //private routeParams: RouteParams,
        private weekService: WeekService) {
    }

    ngOnInit() {
        
    }


    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        console.log(changes);
        if(changes['modyule'] !== undefined){  //as it will be when this is called at component init
            var activeWeekSet = false;
            
            //go and get week data for this modyule
            this.weekService.getWeeks(changes['modyule'].currentValue.siteUrl)
             .subscribe(
                weeks => {
                    this.weeks = weeks;
                    for(var week of this.weeks){
                        let currentDate: Date = new Date();
                        //if(currentDate >= week.startDate && currentDate <= week.endDate){
                            //this is the current Week
                            //week.active = true;
                            //activeWeekSet = true;
                        //}
                    }
                    if(!activeWeekSet){
                        this.weeks[0].active = true;
                    }
                },
                error =>  this.errorMessage = <any>error);
        }
    }

}