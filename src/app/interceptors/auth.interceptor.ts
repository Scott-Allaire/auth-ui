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
  private unprotectedPaths = [
    '/login',
    '/signup'
  ]
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = sessionStorage.getItem('auth-token');

    if (authToken && this.isProtected(request.url)) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${authToken}`},
      });
    }

    console.log('Authorization', request.headers.get('Authorization'));
    return next.handle(request);
  }

  private isProtected(url: string): boolean {
    for (var path of this.unprotectedPaths) {
      if (url.endsWith(path)) {
        return false;
      }
    }

    return true;
  }
}
