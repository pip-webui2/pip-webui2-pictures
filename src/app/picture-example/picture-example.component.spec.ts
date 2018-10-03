import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureExampleComponent } from './picture-example.component';

describe('PictureExampleComponent', () => {
  let component: PictureExampleComponent;
  let fixture: ComponentFixture<PictureExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
