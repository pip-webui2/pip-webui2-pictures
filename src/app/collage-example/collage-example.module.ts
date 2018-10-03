import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PipCollageModule } from 'pip-webui2-pictures';

import { CollageExampleComponent } from './collage-example.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,

    PipCollageModule
  ],
  declarations: [CollageExampleComponent]
})
export class CollageExampleModule { }
