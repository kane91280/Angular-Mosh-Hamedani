import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  private img_host : string = "https://www.rmit.edu.au";
  private _rmit_link : string = "/content/dam/rmit/rmit-images/marketing-only/MIT_Brand2014_campus&city_0036_desat_web-masthead.jpg.transform/rendition-1500x750/image.jpg";
  constructor() { }
  get rmit_link = () => { return this.rmit_link; }

  

  ngOnInit() {
  }

}
