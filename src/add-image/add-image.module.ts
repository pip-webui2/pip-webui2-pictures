import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';

import { PipAddImageComponent } from './add-image.component';
import { PipCameraDialogComponent } from '../camera-dialog/camera-dialog.component';
import { PipCameraDialogModule } from '../camera-dialog/camera-dialog.module'

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

    PipCameraDialogModule
  ],
  exports: [
    PipAddImageComponent
  ],
  providers: [],
  entryComponents: [PipCameraDialogComponent]
})
export class PipAddImageModule { }