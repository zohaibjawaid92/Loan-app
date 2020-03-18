import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoAttachPageRoutingModule } from './photo-attach-routing.module';

import { PhotoAttachPage } from './photo-attach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoAttachPageRoutingModule
  ],
  declarations: [PhotoAttachPage]
})
export class PhotoAttachPageModule {}
