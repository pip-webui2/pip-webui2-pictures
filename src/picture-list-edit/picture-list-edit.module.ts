import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipPictureListEditComponent } from './picture-list-edit.component';

@NgModule({
  declarations: [
    PipPictureListEditComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipPictureListEditComponent
  ],
  providers: [],
})
export class PipPictureListEditModule { }