import { TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { CollageExampleModule } from './collage-example/collage-example.module';
import { PictureEditExampleModule } from './picture-edit-example/picture-edit-example.module';
import { PictureExampleModule } from './picture-example/picture-example.module';
import { PictureListEditExampleModule } from './picture-list-edit-example/picture-list-edit-example.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NoopAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSelectModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        TranslateModule.forRoot(),

        PipThemesModule.forRoot(),

        AppRoutingModule,
        ExamplesListModule,
        CollageExampleModule,
        PictureEditExampleModule,
        PictureExampleModule,
        PictureListEditExampleModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
