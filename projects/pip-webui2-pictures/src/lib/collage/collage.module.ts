import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatGridListModule } from '@angular/material';

import { PipPictureModule } from '../picture/picture.module';
import { PipCollageComponent } from './collage.component';

@NgModule({
  declarations: [
    PipCollageComponent
  ],
  imports: [
    CommonModule,
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
