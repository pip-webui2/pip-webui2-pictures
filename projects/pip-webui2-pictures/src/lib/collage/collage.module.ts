import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

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
