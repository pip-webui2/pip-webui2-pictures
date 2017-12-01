import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { ToggleButtonsExampleComponent } from './toggle-buttons-example.component';
import { PipButtonToggleGroupModule } from '../pip-webui2-buttons';

@NgModule({
  declarations: [
    ToggleButtonsExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipButtonToggleGroupModule
  ],
  exports: [
    ToggleButtonsExampleComponent
  ],
  providers: [
    
  ],
})
export class ToggleButtonsExampleModule { }