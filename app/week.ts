import { Modyule } from './modyule';
import { Lecture } from './lecture';
import { Seminar } from './seminar';


export class Week {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    active: boolean;
    resourcesUrl: string;
    
    modyule: Modyule;  //'Module' is resrved keyword
    
    lectures: Lecture[];
    seminars: Seminar[];
}