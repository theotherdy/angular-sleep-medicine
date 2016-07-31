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
//import { Router } from '@angular/router-deprecated';
//import { RouteParams } from '@angular/router-deprecated';
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var modyule_service_1 = require('./modyule.service');
var week_component_1 = require('./week.component');
var ModyuleComponent = (function () {
    function ModyuleComponent(
        //private router: Router,
        //private routeParams: RouteParams,
        modyuleService) {
        this.modyuleService = modyuleService;
        this.mode = 'Observable';
    }
    /**
    * Initialise ModyuleComponent
    * Get modyules and set selectedModyule based on myGlobals.currentModyule, which is set in modyule.service.ts
    * @todo Deal with no available modyules for this user
    */
    ModyuleComponent.prototype.ngOnInit = function () {
        /*this.modyuleService
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
                if(myGlobals.currentModyule){
                    this.selectedModyule = this.getModyule(myGlobals.currentModyule);
                } else {
                    this.selectedModyule = this.modyules[0];  //ie first one in array
                }
            });*/
        var _this = this;
        //So, the idea is to call getModyules, get a list of Modyules back then use switchMap to pass those through to the etails bit that will add names!
        this.modyuleService.getModyules()
            .switchMap(function (modyules) { return _this.modyuleService.getModyulesDetails(modyules); })
            .subscribe(function (modyules) {
            _this.modyules = modyules;
        }, function (error) { return _this.errorMessage = error; });
    };
    ModyuleComponent.prototype.onSelect = function (modyule) {
        this.selectedModyule = modyule;
    };
    ModyuleComponent.prototype.getModyule = function (id) {
        return this.modyules.filter(function (mod) {
            return (mod.siteId === id);
        })[0]; //ie first [0] in returned array
    };
    ModyuleComponent = __decorate([
        core_1.Component({
            selector: 'modyules-component',
            templateUrl: 'app/modyule.component.html',
            directives: [week_component_1.WeekComponent, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, ng2_bootstrap_1.CollapseDirective],
            providers: [modyule_service_1.ModyuleService]
        }), 
        __metadata('design:paramtypes', [modyule_service_1.ModyuleService])
    ], ModyuleComponent);
    return ModyuleComponent;
}());
exports.ModyuleComponent = ModyuleComponent;
//# sourceMappingURL=modyule.component.js.map