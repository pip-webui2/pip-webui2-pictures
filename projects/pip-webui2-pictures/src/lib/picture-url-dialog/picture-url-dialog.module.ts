import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
