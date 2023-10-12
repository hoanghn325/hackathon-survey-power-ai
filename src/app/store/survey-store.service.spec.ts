import { TestBed } from '@angular/core/testing';

import { SurveyStoreService } from './survey-store.service';

describe('SurveyStoreService', () => {
  let service: SurveyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
