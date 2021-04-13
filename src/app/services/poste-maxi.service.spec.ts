import { TestBed } from '@angular/core/testing';

import { PosteMaxiService } from './poste-maxi.service';

describe('PosteMaxiService', () => {
  let service: PosteMaxiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosteMaxiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
