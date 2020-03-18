import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigateByUrl("/app/tabs/dashboard");
  }
}
