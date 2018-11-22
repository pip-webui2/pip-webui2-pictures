import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PipCollageModule } from 'pip-webui2-pictures';

import { CollageExampleComponent } from './collage-example.component';

describe('CollageExampleComponent', () => {
  let component: CollageExampleComponent;
  let fixture: ComponentFixture<CollageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollageExampleComponent],
      imports: [
        CommonModule,
        TranslateModule.forRoot(),

        PipCollageModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
