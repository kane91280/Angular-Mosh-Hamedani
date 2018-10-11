import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  school :string;
  courses : string[];
  isDisabled : boolean = false;
  badHtml = "Hello <script>alert('Hacked');</script>World";
  classesToBeIncluded = "btn btn-primary btn-bold btn-font-color-orange text-uppercase";
  activateColorOrange : boolean = false;
  activateUppercase : boolean = true;

  updateHtmlClasses() : object{
    let classes = {
      'btn-font-color-orange': this.activateColorOrange,
      'text-uppercase': this.activateUppercase
    };
    return classes;
  }

  constructor(coursesService:CoursesService, commonService:CommonService) {     
    this.courses = coursesService.getCourseList();  
    this.school = commonService.getSchoolName();
  }

  

  ngOnInit() {
  }

}
