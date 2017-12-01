import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipPictureListComponent } from './picture-list.component';

@NgModule({
  declarations: [
    PipPictureListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipPictureListComponent
  ],
  providers: [],
})
export class PipPictureListModule { }