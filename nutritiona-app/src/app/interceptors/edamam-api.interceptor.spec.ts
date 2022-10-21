import { TestBed } from '@angular/core/testing';

import { EdamamAPIInterceptor } from './edamam-api.interceptor';

describe('EdamamAPIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EdamamAPIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EdamamAPIInterceptor = TestBed.inject(EdamamAPIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
