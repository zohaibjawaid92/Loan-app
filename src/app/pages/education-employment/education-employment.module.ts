import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationEmploymentPageRoutingModule } from './education-employment-routing.module';

import { EducationEmploymentPage } from './education-employment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationEmploymentPageRoutingModule
  ],
  declarations: [EducationEmploymentPage]
})
export class EducationEmploymentPageModule {}
