import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatDialogModule, MatInputModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { PipPictureModule } from '../picture/picture.module';
import { PipPictureUrlDialogComponent } from './picture-url-dialog.component';

@NgModule({
  declarations: [
    PipPictureUrlDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    TranslateModule,

    PipPictureModule
  ],
  exports: [
    PipPictureUrlDialogComponent
  ],
  providers: [],
})
export class PipPictureUrlDialogModule { }
