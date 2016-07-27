"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/*
 * Sorts out the square bracketed lecturer name in a lecture description
 * Defaults to return just the description unless the following is passed as a string pipe parameter
 * 'lecturer' = Return lecturer(')s(') name
*/
var DescriptionFormatterPipe = (function () {
    function DescriptionFormatterPipe() {
    }
    DescriptionFormatterPipe.prototype.transform = function (descriptionText, getElement) {
        if (getElement == 'lecturer') {
            var contentsOfBrackets = descriptionText.slice(descriptionText.lastIndexOf('[') + 1, descriptionText.length - 1);
            var lecturersToReturn = '';
            if (contentsOfBrackets.indexOf('&') != -1) {
                var lecturersList = contentsOfBrackets.split('&');
                var counter = 1;
                var noOfLecturers = lecturersList.length;
                for (var _i = 0, lecturersList_1 = lecturersList; _i < lecturersList_1.length; _i++) {
                    var lecturer = lecturersList_1[_i];
                    lecturersToReturn += lecturer.trim();
                    if (counter == noOfLecturers - 1) {
                        lecturersToReturn += ' and ';
                    }
                    else if (counter < noOfLecturers - 1) {
                        lecturersToReturn += ', ';
                    }
                    counter++;
                }
            }
            else {
                lecturersToReturn = contentsOfBrackets;
            }
            return lecturersToReturn; // descriptionText.slice(descriptionText.lastIndexOf('[')+1,descriptionText.length-1);  
        }
        else {
            return descriptionText.slice(0, descriptionText.lastIndexOf('['));
        }
    };
    DescriptionFormatterPipe = __decorate([
        core_1.Pipe({ name: 'descriptionFormatter' }), 
        __metadata('design:paramtypes', [])
    ], DescriptionFormatterPipe);
    return DescriptionFormatterPipe;
}());
exports.DescriptionFormatterPipe = DescriptionFormatterPipe;
//# sourceMappingURL=description-formatter.pipe.js.map