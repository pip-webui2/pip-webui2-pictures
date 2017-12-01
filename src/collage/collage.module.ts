import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipCollageComponent } from './collage.component';

@NgModule({
  declarations: [
    PipCollageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipCollageComponent
  ],
  providers: [],
})
export class PipCollageModule { }