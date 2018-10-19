import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGPixiStageComponent } from './ng-pixi-stage.component';

describe('NGPixiStageComponent', () => {
  let component: NGPixiStageComponent;
  let fixture: ComponentFixture<NGPixiStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGPixiStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGPixiStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
