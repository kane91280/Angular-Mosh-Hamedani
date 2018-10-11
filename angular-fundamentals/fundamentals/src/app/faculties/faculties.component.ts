import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {
  private _school : string;
  private _h2Styles : string = "color:orange";

  get school() { return this._school;}
  public get h2Styles(): string {
    return this._h2Styles;
  }
  public set h2Styles(value: string) {
    this._h2Styles = value;
  }
  
  constructor(commonService : CommonService) {
    this._school = commonService.getSchoolName();
  }
  
  ngOnInit() {
  }

}
