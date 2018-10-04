import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  school = "RMIT";
  courses;
  constructor() { 
    /*let coursesService = new CoursesService();
    this.courses = coursesService.getCourseList();   */
  }


  ngOnInit() {
  }

}
