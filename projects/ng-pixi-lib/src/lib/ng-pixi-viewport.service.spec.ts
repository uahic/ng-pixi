import { TestBed, inject } from '@angular/core/testing';

import { NgPixiViewportService } from './ng-pixi-viewport.service';

describe('NgPixiViewportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgPixiViewportService]
    });
  });

  it('should be created', inject([NgPixiViewportService], (service: NgPixiViewportService) => {
    expect(service).toBeTruthy();
  }));
});
