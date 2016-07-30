import { Tutor } from './tutor';
import { Assignment } from './assignment';


export class Seminar {  
    id: string;
    title: string;
    description: string;
    url: string;
    learningOutcomes: string;
    resourcesUrl: string;  //used to point to files e.g. reading list, pdfs, etc in Resources
    
    tutor: Tutor;
    assignments: Assignment[];
}