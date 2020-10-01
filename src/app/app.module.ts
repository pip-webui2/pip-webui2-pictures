import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule, pipWebUI2ThemesList } from 'pip-webui2-themes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollageExampleModule } from './collage-example/collage-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { PictureEditExampleModule } from './picture-edit-example/picture-edit-example.module';
import { PictureExampleModule } from './picture-example/picture-example.module';
import { PictureListEditExampleModule } from './picture-list-edit-example/picture-list-edit-example.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSelectModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        TranslateModule.forRoot(),

        PipThemesModule.withConfig({
            themes: pipWebUI2ThemesList
        }),

        AppRoutingModule,
        ExamplesListModule,
        CollageExampleModule,
        PictureEditExampleModule,
        PictureExampleModule,
        PictureListEditExampleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
