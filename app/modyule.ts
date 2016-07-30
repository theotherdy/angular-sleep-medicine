import { Week } from './week';
import { Lecture } from './lecture';
import { Assessment } from './assessment';

export class Modyule {  //'Module' is reserved keyword
    siteId: string;
    siteUrl: string;
    name: string;
    startDate: Date;
    endDate: Date;
    currentModyule: boolean;
    resourcesUrl: string;  //could be used to point to files in Resources
    
    weeks: Week[];
    supplemtaryLectures: Lecture[];  //letures where type = supplementary
    assessments: Assessment[];
}