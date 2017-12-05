import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';

import { PipAddImageComponent } from './add-image.component';
import { PipCameraDialogComponent } from '../camera-dialog/camera-dialog.component';
import { PipCameraDialogModule } from '../camera-dialog/camera-dialog.module'
import { PipPictureUrlDialogComponent } from '../picture-url-dialog/picture-url-dialog.component';
import { PipPictureUrlDialogModule } from '../picture-url-dialog/picture-url-dialog.module'

@NgModule({
  declarations: [
    PipAddImageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,

    PipCameraDialogModule,
    PipPictureUrlDialogModule
  ],
  exports: [
    PipAddImageComponent
  ],
  providers: [],
  entryComponents: [PipCameraDialogComponent, PipPictureUrlDialogComponent]
})
export class PipAddImageModule { }