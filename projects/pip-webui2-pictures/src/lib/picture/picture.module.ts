import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { PipPictureComponent } from './picture.component';

@NgModule({
  declarations: [
    PipPictureComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PipPictureComponent
  ],
  providers: [],
})
export class PipPictureModule { }
