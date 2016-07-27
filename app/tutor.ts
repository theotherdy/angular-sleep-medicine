import { Lecture } from './lecture';
import { Seminar } from './seminar';

export class Tutor {
    name: string;
    
    lectures: Lecture[];
    seminars: Seminar[];
}