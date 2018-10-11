import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  getSchoolName() : string {
    return "Khoa Academy";
  }
}
