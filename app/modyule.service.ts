import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Modyule } from './modyule';
import { Observable }     from 'rxjs/Observable';
import { Subject }     from 'rxjs/Subject';

import './rxjs-operators';  // Add the RxJS Observable operators we need in this app.

//import { MODYULES } from './mock-modyules';

import myGlobals = require('./globals'); 

@Injectable()
export class ModyuleService {
    
    constructor (private http: Http) {}
    
    private modyulesUrl = myGlobals.entityBrokerBaseUrl + myGlobals.urlToSpecifyPortal + myGlobals.baseSitePath + myGlobals.suffixForTestingOnly;  
    
    getModyules (): Observable<Modyule[]> {
        return this.http.get(this.modyulesUrl)
            .map(this.initialiseModyules)
            .catch(this.handleError);            
    }
    
    getModyulesDetails (modyules:Modyule[]): Observable<Modyule[]> {
        let calls  = [];
            
        for (let modyule of modyules){
            calls.push(
                this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json')
                );
        }
        
        var subject = new Subject<Modyule[]>();       //see: http://stackoverflow.com/a/38668416/2235210 for why Subject   

        Observable.forkJoin(calls).subscribe((res: any) => {
            for (let response of res){
                //Note this is a really very awkward way of matching modyule with a siteId assigned in getModyules (above) with the correct response from forkJoin (could come back in any order), by looking at the requested url from the response object
                let foundModyule = modyules.find(modyule=> {
                    let modyuleUrl = myGlobals.entityBrokerBaseUrlForLocalOnly+myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json';
                    return modyuleUrl === response.url;
                });
                let bodyAsJson = JSON.parse(response._body);
                foundModyule.name = bodyAsJson.lessons_collection[0].lessonTitle;
                }
            subject.next(modyules);
        });
        
        return subject;
    }
    
    private initialiseModyules(res: Response){
        let body = res.json();
        let modyulesToReturn = [];
        for (let site of body.subsites){
            if(site.siteUrl.indexOf('mod')!=-1){  //ie only add subsites with 'mod' in the name
                let tempModyule = new Modyule;
                tempModyule.siteId = site.siteId;
                tempModyule.siteUrl = site.siteUrl;
                modyulesToReturn.push(tempModyule);
            }
        }
        return modyulesToReturn;
    }
    
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
    /*getModyules (): Observable<Modyule[]> {
        var subject = new Subject<Modyule[]>();
        this.http.get(this.modyulesUrl)
            .subscribe(result => {
                this.getModyulesDetails(result)
                .subscribe(modyules => {
                    subject.next(modyules);
                });
            }, error => subject.error(error)
        );

        return subject;  //subject is both observer and observable
    }*/


    /*private getModyuleDetails = (res: Response) => {  //this is called instance method for defining function (see: http://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html) and is used here so that the this.http below refers to the class not the map callback that calls it in getModyules.
        let body = res.json();
        let calls  = [];
        let modyulesToReturn = [];

        for (let site of body.subsites){
            if(site.siteUrl.indexOf('mod')!=-1){  //ie only request stuff from subsites with 'mod' in the name
                calls.push(
                    this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + site.siteId + '.json')
                        .map((res: Response) => res.json())
                    );
            }
        }
                
        var subject = new Subject<Modyules[]>();

        Observable.zip.apply(null, calls).subscribe((results) => {
            var modyulesToReturn = [];
            results.forEach(result => {
                let tempModyule = new Modyule;
                //populate modyule data
                modyulesToReturn.push(tempModyule);
            }
            subject.next(modyulesToReturn);
        });
                
        return subject;
                
                
                let tempModyule = new Modyule;
                tempModyule.siteId = site.siteId;
                tempModyule.siteUrl = site.siteUrl;
                
                this.http.get( myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + site.siteId + '.json')
                    .map((res: Response) => res.json())
                    .subscribe(res => {
                        tempModyule.name = res.lessons_collection[0].lessonTitle
                        modyulesToReturn.push(tempModyule);
                    });
            }
        }
          
        return modyulesToReturn;
    }*/
    
    
    /*getModyule(siteId: string): Observable<Modyule> {
        return this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + siteId + '.json')
            .map(this.getModyuleDetails)
            .catch(this.handleError);
    }*/

    
    
    
    /*private getModyuleDetails(res: Response){
        let body = res.json();
        let tempModyule = new Modyule;
        tempModyule.name = body.lessons_collection[0].lessonTitle;
        return tempModyule;
    }*/

    
    /**
    * get list of Modyules (sites) from WebLearn
    *
    * @todo Deal with edge cases e.g before Week 1 of the modyule or after the end
    */
    /** START old version
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
            }
            let currentDate: Date = new Date();
            if(currentDate >= modyule.startDate && currentDate <= modyule.endDate){
                //this is the currentModyule
                myGlobals.currentModyule = modyule.siteId;
            }
        }
        //Now that we know all the start and end dates
        return Promise.resolve(MODYULES);
    } END old version **/
}