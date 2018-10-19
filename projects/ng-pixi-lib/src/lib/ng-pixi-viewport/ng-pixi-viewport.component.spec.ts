import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPixiViewportComponent } from './ng-pixi-viewport.component';

describe('NgPixiViewportComponent', () => {
  let component: NgPixiViewportComponent;
  let fixture: ComponentFixture<NgPixiViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPixiViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPixiViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
