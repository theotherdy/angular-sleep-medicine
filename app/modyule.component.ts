import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router-deprecated';
//import { RouteParams } from '@angular/router-deprecated';

import { DROPDOWN_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { Modyule } from './modyule';
import { ModyuleService } from './modyule.service';
import { WeekComponent } from './week.component';

import myGlobals = require('./globals'); 

@Component({
    selector: 'modyules-component',
    templateUrl: 'app/modyule.component.html',
    directives: [WeekComponent,DROPDOWN_DIRECTIVES,CollapseDirective],
    providers: [ModyuleService]
})

export class ModyuleComponent implements OnInit { 
    modyules: Modyule[];
    selectedModyule: Modyule;
    error: any;
    modyule: Modyule;
    
    constructor(
        //private router: Router,
        //private routeParams: RouteParams,
        private modyuleService: ModyuleService) {
    }
    
    /**
    * Initialise ModyuleComponent
    * Get modyules and set selectedModyule based on myGlobals.currentModyule, which is set in modyule.service.ts
    * @todo Deal with no available modyules for this user
    */
    ngOnInit() {
        this.modyuleService
            .getModyules()
            .then(modyules => {
                this.modyules = modyules;
                //if (this.routeParams.get('id')){
                //    let id = this.routeParams.get('id'); 
                //    this.selectedModyule = this.getModyule(id);
                //} else {
                    //if we're not going to a specific modyule, we need to load up the current modyule
                    if(myGlobals.currentModyule){
                        this.selectedModyule = this.getModyule(myGlobals.currentModyule);
                    } else {
                        this.selectedModyule = this.modyules[0];  //ie first one in array
                    }
                //}
            });
    }
    
    onSelect(modyule: Modyule) { 
        this.selectedModyule = modyule; 
    }
    
    getModyule(id: string){
        return this.modyules.filter( function(mod){
            return (mod.siteId === id);
            })[0];  //ie first [0] in returned array

    }
    
}