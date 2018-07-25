import { TestBed, inject } from '@angular/core/testing';

import { DataGoalService } from './data-goal.service';

describe('DataGoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGoalService]
    });
  });

  it('should be created', inject([DataGoalService], (service: DataGoalService) => {
    expect(service).toBeTruthy();
  }));
});
