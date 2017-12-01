import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule, MatGridListModule } from '@angular/material';

import { PipPictureModule } from '../picture/picture.module';
import { PipCollageComponent } from './collage.component';

@NgModule({
  declarations: [
    PipCollageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,

    PipPictureModule
  ],
  exports: [
    PipCollageComponent
  ],
  providers: [],
})
export class PipCollageModule { }