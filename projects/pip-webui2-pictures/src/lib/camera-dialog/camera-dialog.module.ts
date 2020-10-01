import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
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
