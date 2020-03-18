import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanVerificationPageRoutingModule } from './loan-verification-routing.module';

import { LoanVerificationPage } from './loan-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanVerificationPageRoutingModule
  ],
  declarations: [LoanVerificationPage]
})
export class LoanVerificationPageModule {}
