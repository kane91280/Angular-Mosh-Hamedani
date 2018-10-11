import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { HeadingComponent } from './heading/heading.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    HeadingComponent,
    FacultiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
