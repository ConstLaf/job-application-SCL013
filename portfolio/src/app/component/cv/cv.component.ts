import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  src = "https://constlaf.github.io/job-application-SCL013/portfolio/src/assets/CV_Constanza_Lafuente.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
