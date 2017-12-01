import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipAddImageComponent } from './add-image.component';

@NgModule({
  declarations: [
    PipAddImageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipAddImageComponent
  ],
  providers: [],
})
export class PipAddImageModule { }