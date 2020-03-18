import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  photo_attach() {
    this.router.navigateByUrl("/photo-attach");
  }
}
