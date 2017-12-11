import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule } from 'pip-webui2-themes';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { PictureExampleModule } from './picture-example/picture-example.module';
import { PictureExampleComponent } from './picture-example/picture-example.component';

import { CollageExampleModule } from './collage-example/collage-example.module';
import { CollageExampleComponent } from './collage-example/collage-example.component';

import { PictureEditExampleModule } from './picture-edit-example/picture-edit-example.module';
import { PictureEditExampleComponent } from './picture-edit-example/picture-edit-example.component';

import { PictureListEditExampleModule } from './picture-list-edit-example/picture-list-edit-example.module';
import { PictureListEditExampleComponent } from './picture-list-edit-example/picture-list-edit-example.component';

const appRoutes: Routes = [
  { path: 'picture', component: PictureExampleComponent },
  { path: 'collage', component: CollageExampleComponent },
  { path: 'picture_edit', component: PictureEditExampleComponent },
  { path: 'picture_list_edit', component: PictureListEditExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'picture' }
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
    MatMenuModule,
    
    TranslateModule.forRoot(),

    PipThemesModule,

    ExampleListModule,
    PictureExampleModule,
    CollageExampleModule,
    PictureEditExampleModule,
    PictureListEditExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 