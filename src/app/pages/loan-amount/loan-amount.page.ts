import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.page.html',
  styleUrls: ['./loan-amount.page.scss'],
})
export class LoanAmountPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  loan_submit(){
    this.router.navigateByUrl('/loan-submit');
  }

}
