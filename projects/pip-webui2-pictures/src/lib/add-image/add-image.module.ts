import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { PipAddImageComponent } from './add-image.component';
import { PipCameraDialogComponent } from '../camera-dialog/camera-dialog.component';
import { PipCameraDialogModule } from '../camera-dialog/camera-dialog.module';
import { PipPictureUrlDialogComponent } from '../picture-url-dialog/picture-url-dialog.component';
import { PipPictureUrlDialogModule } from '../picture-url-dialog/picture-url-dialog.module';

@NgModule({
  declarations: [
    PipAddImageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,

    TranslateModule,

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
