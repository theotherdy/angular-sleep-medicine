import { User } from './user';
import { Week } from './week';
import { Assessment } from './assessment';

export class Modyule {  //'Module' is reserved keyword
    siteId: string;
    name: string;
    startDate: Date;
    endDate: Date;
    currentModyule: boolean;
    
    users: User[];
    weeks: Week[];
    assessments: Assessment[];
}