import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPixiRectComponent } from './ng-pixi-rect.component';

describe('NgPixiRectComponent', () => {
  let component: NgPixiRectComponent;
  let fixture: ComponentFixture<NgPixiRectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPixiRectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPixiRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
