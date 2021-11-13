import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURI: string = environment.baseURI;

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.baseURI + '/auth/login', {
      username: username,
      password: password
    });
  }
}
