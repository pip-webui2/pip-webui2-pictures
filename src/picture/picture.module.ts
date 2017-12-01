import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

import { PipPictureComponent } from './picture.component';

@NgModule({
  declarations: [
    PipPictureComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    PipPictureComponent
  ],
  providers: [],
})
export class PipPictureModule { }