import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  
  verify() {
    this.router.navigateByUrl("/loan-verification");
  }
}
