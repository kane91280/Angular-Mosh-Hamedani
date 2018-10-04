import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourseList = ()=>{
    return ["Computer Science", "Business Information System", 
    "Accounting", "Economy", "Finance"];
  }
}
