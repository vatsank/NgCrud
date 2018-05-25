import { TestBed, inject } from '@angular/core/testing';

import { MedicineApiService } from './medicine-api.service';

describe('MedicineApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicineApiService]
    });
  });

  it('should be created', inject([MedicineApiService], (service: MedicineApiService) => {
    expect(service).toBeTruthy();
  }));
});
