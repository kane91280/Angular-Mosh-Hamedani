import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'courses', //use css selector to extend html vocabulary
    template:
            `
                <h2>{{title + " in " + getSchool()}}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}                    
                </ul>       
            `
})
export class CoursesComponent {
    title = "List of courses";
    school = "RMIT";
    courses = ['C programming', 'Laravel', 'Angular'];

    getSchool = () => { return this.school; }
}