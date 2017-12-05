import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { PictureListEditExampleComponent } from './picture-list-edit-example.component';
import { PipPictureListEditModule, PipAddImageModule, PipCameraDialogComponent } from '../pip-webui2-pictures';

@NgModule({
  declarations: [
    PictureListEditExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipPictureListEditModule,
    PipAddImageModule
  ],
  exports: [
    PictureListEditExampleComponent
  ]
})
export class PictureListEditExampleModule { }