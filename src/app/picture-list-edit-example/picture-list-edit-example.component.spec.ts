import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PipPictureListEditModule } from 'pip-webui2-pictures';

import { PictureListEditExampleComponent } from './picture-list-edit-example.component';

describe('PictureListEditExampleComponent', () => {
  let component: PictureListEditExampleComponent;
  let fixture: ComponentFixture<PictureListEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureListEditExampleComponent],
      imports: [
        NoopAnimationsModule,
        CommonModule,
        TranslateModule.forRoot(),

        PipPictureListEditModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureListEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
