import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureEditExampleComponent } from './picture-edit-example.component';

describe('PictureEditExampleComponent', () => {
  let component: PictureEditExampleComponent;
  let fixture: ComponentFixture<PictureEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureEditExampleComponent ]
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
