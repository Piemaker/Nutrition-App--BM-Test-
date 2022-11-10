import { environment } from './../../environments/environment';
import { TestBed } from '@angular/core/testing';

import { EdamamAPIInterceptor } from './edamam-api.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('EdamamAPIInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const app_key = environment.APP_KEY;
  const app_id = environment.APP_ID;

  // the HTTP_INTERCEPTORS is needed for the mocked httpClient to use the interceptor
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: EdamamAPIInterceptor,
          multi: true,
        },
      ],
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  xit('should be created', () => {
    const interceptor: EdamamAPIInterceptor =
      TestBed.inject(EdamamAPIInterceptor);
    expect(interceptor).toBeTruthy();
  });
  it('should add queryParams to each http request', () => {
    httpClient.post('/data', '').subscribe((data) => {
    });
    // if interceptor is working should augment the /data route
    const request = httpTestingController.expectOne(
      `/data?app_key=${app_key}&app_id=${app_id}`
    );
  });
});
