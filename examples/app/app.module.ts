import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule,MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { ToggleButtonsExampleModule } from './toggle-buttons-example/toggle-buttons-example.module';
import { ToggleButtonsExampleComponent } from './toggle-buttons-example/toggle-buttons-example.component';

const appRoutes: Routes = [
  { path: 'toggle_buttons', component: ToggleButtonsExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'action_list' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    
    PipThemesModule,

    ExampleListModule,
    ToggleButtonsExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 