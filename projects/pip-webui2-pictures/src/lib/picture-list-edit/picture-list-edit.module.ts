import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PipFocusedModule } from 'pip-webui2-behaviors-temp';

import { PipPictureModule } from '../picture/picture.module';
import { PipPictureEditModule } from '../picture-edit/picture-edit.module';

import { PipPictureListEditComponent } from './picture-list-edit.component';

@NgModule({
  declarations: [
    PipPictureListEditComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,

    PipFocusedModule,

    PipPictureModule,
    PipPictureEditModule
  ],
  exports: [
    PipPictureListEditComponent
  ],
  providers: [],
})
export class PipPictureListEditModule { }
