import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = sessionStorage.getItem('auth-token');

    if (authToken) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${authToken}`},
      });
    }

    console.log('Authorization', request.headers.get('Authorization'));
    return next.handle(request);
  }
}
