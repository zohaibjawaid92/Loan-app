import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-education-employment',
  templateUrl: './education-employment.page.html',
  styleUrls: ['./education-employment.page.scss'],
})
export class EducationEmploymentPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  personal_information() {
    this.router.navigateByUrl("/personal-information");
  }
}
