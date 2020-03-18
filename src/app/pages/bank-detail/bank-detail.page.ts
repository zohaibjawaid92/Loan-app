import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.page.html',
  styleUrls: ['./bank-detail.page.scss'],
})
export class BankDetailPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  education_employment() {
    this.router.navigateByUrl("/education-employment");
  }
}
