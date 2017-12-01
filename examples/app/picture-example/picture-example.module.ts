import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { PictureExampleComponent } from './picture-example.component';
import { PipPictureModule } from '../pip-webui2-pictures';

@NgModule({
  declarations: [
    PictureExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipPictureModule
  ],
  exports: [
    PictureExampleComponent
  ],
  providers: [
    
  ],
})
export class PictureExampleModule { }