import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChange, OnInit} from '@angular/core';

import {CORE_DIRECTIVES} from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Observable }     from 'rxjs/Observable';

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
    
    error: any;
    errorMessage: string;
    
    weeksObservable: Observable<Week[]>;

    
    constructor(
        private weekService: WeekService) {
    }

    ngOnInit() {
        //this.updateWeek(this.modyule);
    }
    
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        //console.log(changes);
        if(changes['modyule'] !== undefined){  //as it will be when this is called at component init
        //if(modyule !== undefined){  //as it will be when this is called at component init
            var activeWeekSet = false;
            //go and get week data for this modyule
            //if(this.modyule.weeks === undefined || this.modyule.weeks.length == 0 ){  //only update if we don't already have the data
                this.updateWeek(this.modyule);
            //}
        }
    }
    
    private updateWeek = (newModyule: Modyule) =>{
        var activeWeekSet = false;
        //go and get week data for this modyule
        this.weeksObservable = this.weekService.getWeeks(newModyule.siteUrl)
            .map(weeks => {
                console.log(weeks);
                return weeks;
            })
            .switchMap(weeks => this.weekService.getWeeksDetails(weeks))
            //.publishReplay(1) //cache latest results see: http://www.syntaxsuccess.com/viewarticle/caching-with-rxjs-observables-in-angular-2.0
            .map(
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
                        week.modyule = this.modyule;
                    }
                    if(!activeWeekSet){
                        this.modyule.weeks[0].active = true;
                    }
                return weeks;
                }
            )
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
    }
    
    private compareByWeekName(weekA: Week,weekB: Week): number {
        return weekA.name.localeCompare(weekB.name, undefined, {numeric: true, sensitivity: 'base'});  //sort function to naturally sort strings: http://stackoverflow.com/a/38641281/2235210
    }
    
    /*ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        //console.log(changes);
        if(changes['modyule'] !== undefined){  //as it will be when this is called at component init
            var activeWeekSet = false;
            //go and get week data for this modyule
            this.weekService.getWeeks(changes['modyule'].currentValue.siteUrl)
                .switchMap(weeks => this.weekService.getWeeksDetails(weeks)) 
                .subscribe(
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
                );
        }
    }*/
}