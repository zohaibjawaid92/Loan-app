import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanSubmitPageRoutingModule } from './loan-submit-routing.module';

import { LoanSubmitPage } from './loan-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanSubmitPageRoutingModule
  ],
  declarations: [LoanSubmitPage]
})
export class LoanSubmitPageModule {}
