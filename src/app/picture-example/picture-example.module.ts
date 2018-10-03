import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipPictureModule } from 'pip-webui2-pictures';

import { PictureExampleComponent } from './picture-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,

    PipPictureModule
  ],
  declarations: [PictureExampleComponent]
})
export class PictureExampleModule { }
