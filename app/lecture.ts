import { Tutor } from './tutor';

export class Lecture {  
    id: string;
    title: string;
    description: string;
    type: string; //main or supplementary
    url: string;
    learningOutcomes: string;
    resourcesUrl: string;  //used to point to files e.g. reading list, pdfs, etc in Resources
    
    tutor: Tutor;
}