import { TestBed, inject } from '@angular/core/testing';

import { NgPixiLibService } from './ng-pixi-lib.service';

describe('NgPixiLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgPixiLibService]
    });
  });

  it('should be created', inject([NgPixiLibService], (service: NgPixiLibService) => {
    expect(service).toBeTruthy();
  }));
});
