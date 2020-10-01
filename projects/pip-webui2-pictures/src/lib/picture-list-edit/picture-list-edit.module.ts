import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipFocusedModule } from 'pip-webui2-behaviors';

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
