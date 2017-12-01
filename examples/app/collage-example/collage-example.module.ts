import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { CollageExampleComponent } from './collage-example.component';
import { PipCollageModule } from '../pip-webui2-pictures';

@NgModule({
  declarations: [
    CollageExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipCollageModule
  ],
  exports: [
    CollageExampleComponent
  ],
  providers: [
    
  ],
})
export class CollageExampleModule { }