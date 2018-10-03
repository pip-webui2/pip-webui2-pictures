import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageExampleComponent } from './collage-example.component';

describe('CollageExampleComponent', () => {
  let component: CollageExampleComponent;
  let fixture: ComponentFixture<CollageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollageExampleComponent ]
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
