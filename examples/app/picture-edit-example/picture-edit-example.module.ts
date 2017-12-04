import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { PictureEditExampleComponent } from './picture-edit-example.component';
import { PipPictureEditModule, PipAddImageModule, PipCameraDialogComponent } from '../pip-webui2-pictures';

@NgModule({
  declarations: [
    PictureEditExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipPictureEditModule,
    PipAddImageModule
  ],
  exports: [
    PictureEditExampleComponent
  ],
  //entryComponents: [PipCameraDialogComponent]
})
export class PictureEditExampleModule { }