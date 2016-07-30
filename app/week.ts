import { Lecture } from './lecture';
import { Seminar } from './seminar';


export class Week {
    siteId: string;
    siteUrl: string;
    name: string;
    active: boolean;
    resourcesUrl: string;  //could be used to point to files in Resources
    
    lectures: Lecture[];
    seminars: Seminar[];
}