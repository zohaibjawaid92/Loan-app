import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanAmountPageRoutingModule } from './loan-amount-routing.module';

import { LoanAmountPage } from './loan-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanAmountPageRoutingModule
  ],
  declarations: [LoanAmountPage]
})
export class LoanAmountPageModule {}
