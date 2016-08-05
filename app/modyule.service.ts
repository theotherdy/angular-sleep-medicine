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
                this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json').cache()
                );
            calls.push(
                this.http.get(myGlobals.entityBrokerBaseUrl + myGlobals.contentUrl + modyule.siteId + '.json').cache()
                );
        }
        
        var subject = new Subject<Modyule[]>();       //see: http://stackoverflow.com/a/38668416/2235210 for why Subject   

        Observable.forkJoin(calls).subscribe((res: any) => {
            for (let response of res){
                //Note this is a really very awkward way of matching modyule with a siteId assigned in getModyules (above) with the correct response from forkJoin (could come back in any order), by looking at the requested url from the response object
                let foundModyule = modyules.find(modyule=> {
                    //let modyuleUrl = myGlobals.entityBrokerBaseUrlForLocalOnly+myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json';
                    return response.url.indexOf(modyule.siteId)!=-1;
                });
                let bodyAsJson = JSON.parse(response._body);
                if(response.url.indexOf(myGlobals.lessonsUrl)!=-1){ //getting lessons
                    foundModyule.name = bodyAsJson.lessons_collection[0].lessonTitle;
                } else if (response.url.indexOf(myGlobals.contentUrl)!=-1){ //getting resources){
                    //find folder caled Start date and get the date from its description
                    let startFolder = bodyAsJson.content_collection[0].resourceChildren.find(folder=> {
                        //let modyuleUrl = myGlobals.entityBrokerBaseUrlForLocalOnly+myGlobals.entityBrokerBaseUrl + myGlobals.lessonsUrl + modyule.siteId + '.json';
                        return folder.name.toLowerCase() === 'start date';
                    });
                    foundModyule.startDate = new Date(startFolder.description);
                }
                //console.log(foundModyule)
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
    
}