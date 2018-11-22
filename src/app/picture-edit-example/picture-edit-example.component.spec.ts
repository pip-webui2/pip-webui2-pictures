import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PipPictureEditModule, PipAddImageModule } from 'pip-webui2-pictures';

import { PictureEditExampleComponent } from './picture-edit-example.component';

describe('PictureEditExampleComponent', () => {
  let component: PictureEditExampleComponent;
  let fixture: ComponentFixture<PictureEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureEditExampleComponent],
      imports: [
        CommonModule,
        TranslateModule.forRoot(),

        PipPictureEditModule,
        PipAddImageModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
