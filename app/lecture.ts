import { Week } from './week';
import { Tutor } from './tutor';


export class Lecture {  
    id: string;
    title: string;
    description: string;
    type: string; //main or supplementary
    url: string;
    mobileUrl: string;
    learningOutcomes: string;
    
    week: Week;
    tutor: Tutor;
}