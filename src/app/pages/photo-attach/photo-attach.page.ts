import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-photo-attach',
  templateUrl: './photo-attach.page.html',
  styleUrls: ['./photo-attach.page.scss'],
})
export class PhotoAttachPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
 
  loan_amount() {
    this.router.navigateByUrl("/loan-amount");
  }
}
