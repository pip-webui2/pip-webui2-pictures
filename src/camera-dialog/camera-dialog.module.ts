import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { WebCamModule } from 'ack-angular-webcam';
import { PipCameraDialogComponent } from './camera-dialog.component';

@NgModule({
  declarations: [
    PipCameraDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule,

    WebCamModule
  ],
  exports: [
    PipCameraDialogComponent
  ],
  providers: []
})
export class PipCameraDialogModule { }