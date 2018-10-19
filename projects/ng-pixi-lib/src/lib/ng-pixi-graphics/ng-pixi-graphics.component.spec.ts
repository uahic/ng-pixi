import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPixiGraphicsComponent } from './ng-pixi-graphics.component';

describe('NgPixiGraphicsComponent', () => {
  let component: NgPixiGraphicsComponent;
  let fixture: ComponentFixture<NgPixiGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPixiGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPixiGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
