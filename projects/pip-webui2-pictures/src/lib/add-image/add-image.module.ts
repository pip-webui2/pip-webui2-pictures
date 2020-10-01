import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
  entryComponents: [PipPictureUrlDialogComponent]
})
export class PipAddImageModule { }
