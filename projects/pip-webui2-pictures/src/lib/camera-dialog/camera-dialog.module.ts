import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { WebcamModule } from 'ngx-webcam';

import { PipCameraDialogComponent } from './camera-dialog.component';

@NgModule({
  declarations: [PipCameraDialogComponent],
  exports: [PipCameraDialogComponent],
  entryComponents: [PipCameraDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule,

    WebcamModule
  ],
  providers: []
})
export class PipCameraDialogModule { }
