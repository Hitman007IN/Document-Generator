import { TestBed, inject } from '@angular/core/testing';

import { NilaTransactionService } from './nila-transaction.service';

describe('NilaTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NilaTransactionService]
    });
  });

  it('should be created', inject([NilaTransactionService], (service: NilaTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
