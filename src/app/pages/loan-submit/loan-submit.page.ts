import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loan-submit',
  templateUrl: './loan-submit.page.html',
  styleUrls: ['./loan-submit.page.scss'],
})
export class LoanSubmitPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  dashboard(){
    this.router.navigateByUrl('/app/tabs/dashboard');
  }

}
