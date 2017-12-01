import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipPictureEditComponent } from './picture-edit.component';

@NgModule({
  declarations: [
    PipPictureEditComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipPictureEditComponent
  ],
  providers: [],
})
export class PipPictureEditModule { }