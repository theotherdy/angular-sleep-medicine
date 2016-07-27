import { Week } from './week';
import { Tutor } from './tutor';
import { Assignment } from './assignment';


export class Seminar {  
    id: string;
    title: string;
    description: string;
    url: string;
    activityUrl: string;
    readingListUrl: string;
    resourcesUrl: string;
    
    //belongsTo
    week: Week;
    tutor: Tutor;
    
    //hasMany
    assignments: Assignment[];
}