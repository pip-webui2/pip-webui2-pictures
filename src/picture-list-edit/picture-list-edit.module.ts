import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipFocusedModule } from 'pip-webui2-behaviors';
import { PipPictureModule } from '../picture/picture.module';
import { PipPictureEditModule } from '../picture-edit/picture-edit.module';

import { PipPictureListEditComponent } from './picture-list-edit.component';

@NgModule({
  declarations: [
    PipPictureListEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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