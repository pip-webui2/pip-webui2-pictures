import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureListEditExampleComponent } from './picture-list-edit-example.component';

describe('PictureListEditExampleComponent', () => {
  let component: PictureListEditExampleComponent;
  let fixture: ComponentFixture<PictureListEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureListEditExampleComponent ]
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
