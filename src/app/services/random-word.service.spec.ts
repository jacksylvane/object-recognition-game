import { TestBed } from '@angular/core/testing';

import { RandomWordService } from './random-word.service';

describe('RandomWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomWordService = TestBed.get(RandomWordService);
    expect(service).toBeTruthy();
  });
});
