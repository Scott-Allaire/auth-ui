import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURI: string = environment.baseURI;

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<HttpResponse<AuthResponse>> {
    const body = {
      user: {
        email: email,
        password: password,
      },
    };
    const httpOptions = {
      observe: "response"
    };
    return this.httpClient.post<HttpResponse<AuthResponse>>(this.baseURI + '/login', body, httpOptions);
  }
}
