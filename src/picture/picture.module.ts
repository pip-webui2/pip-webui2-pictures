import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipPictureComponent } from './picture.component';

@NgModule({
  declarations: [
    PipPictureComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipPictureComponent
  ],
  providers: [],
})
export class PipPictureModule { }