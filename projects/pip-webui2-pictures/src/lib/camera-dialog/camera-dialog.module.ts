import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { WebCamModule } from 'ack-angular-webcam';

import { PipCameraDialogComponent } from './camera-dialog.component';

@NgModule({
  declarations: [
    PipCameraDialogComponent
  ],
  imports: [
    CommonModule,
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
