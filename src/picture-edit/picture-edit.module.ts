import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipPictureModule } from '../picture/picture.module';
import { PipAddImageModule } from '../add-image/add-image.module';

import { PipPictureEditComponent } from './picture-edit.component';

@NgModule({
  declarations: [
    PipPictureEditComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,

    PipPictureModule,
    PipAddImageModule
  ],
  exports: [
    PipPictureEditComponent
  ],
  providers: [],
})
export class PipPictureEditModule { }