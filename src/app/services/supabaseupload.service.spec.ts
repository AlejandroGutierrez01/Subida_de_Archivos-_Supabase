import { TestBed } from '@angular/core/testing';

import { SupabaseuploadService } from './supabaseupload.service';

describe('SupabaseuploadService', () => {
  let service: SupabaseuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
