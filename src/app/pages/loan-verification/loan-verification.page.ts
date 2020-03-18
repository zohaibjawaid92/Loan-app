import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-loan-verification',
  templateUrl: './loan-verification.page.html',
  styleUrls: ['./loan-verification.page.scss'],
})
export class LoanVerificationPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  bank_detail() {
    this.router.navigateByUrl("/bank-detail");
  }
}
