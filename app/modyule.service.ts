import { Injectable } from '@angular/core';

import { Modyule } from './modyule';
import { MODYULES } from './mock-modyules';

import myGlobals = require('./globals'); 

@Injectable()
export class ModyuleService {
    

    /**
    * get list of Modyules (sites) from WebLearn
    *
    * @todo Deal with edge cases e.g before Week 1 of the modyule or after the end
    */
    getModyules() {
        //let's run through our modules and look at the dates of our weeks
        //set .currentWeek property of the modyule to the Week.id if it contains a current week - complex thing will be edge cases
        for (let modyule of MODYULES){
            modyule.startDate = new Date('2099-12-31T23:59:59.999Z');
            modyule.endDate = new Date('2000-01-01T00:00:00.000Z');
            for (let week of modyule.weeks){
                if(week.startDate < modyule.startDate){
                    modyule.startDate = week.startDate;
                } 
                if(week.endDate > modyule.endDate){
                    modyule.endDate = week.endDate;
                } 
                //let currentDate: Date = new Date();
                //if(currentDate >= week.startDate && currentDate <= week.endDate){
                    //this is the currentModyule
                   // week.active = true;
                    //myGlobals.currentWeek = week.id;
                //}
            }
            let currentDate: Date = new Date();
            if(currentDate >= modyule.startDate && currentDate <= modyule.endDate){
                //this is the currentModyule
                myGlobals.currentModyule = modyule.siteId;
            }
        }
        //Now that we know all the start and end dates
        return Promise.resolve(MODYULES);
    }
}