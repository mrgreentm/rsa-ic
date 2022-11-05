/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EncriptService } from './encript.service';

describe('Service: Encript', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncriptService]
    });
  });

  it('should ...', inject([EncriptService], (service: EncriptService) => {
    expect(service).toBeTruthy();
  }));
});
