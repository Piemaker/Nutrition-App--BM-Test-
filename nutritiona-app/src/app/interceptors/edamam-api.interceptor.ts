import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
//* this adds the app key & app id as a query param to all http requests
@Injectable()
export class EdamamAPIInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const app_key = environment.APP_KEY;
    const app_id = environment.APP_ID;
    const queryParams = {
      app_key,
      app_id,
    };
    request = request.clone({
      setParams: {
        ...queryParams,
      },
    });
    return next.handle(request);
  }
}
