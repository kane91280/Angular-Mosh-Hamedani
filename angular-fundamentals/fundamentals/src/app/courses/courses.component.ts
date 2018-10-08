import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  school :string = "Khoa Academy";
  courses : string[];
  isDisabled : boolean = false;
  badHtml = "Hello <script>alert('Hacked');</script>World";

  constructor(coursesService:CoursesService) {     
    this.courses = coursesService.getCourseList();  
  }
  ngOnInit() {
  }

}
