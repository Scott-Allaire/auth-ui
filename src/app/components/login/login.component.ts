import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatCard } from '@angular/material/card';
import {
  MatFormField,
  MatFormFieldControl,
  MatLabel,
} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, subscribeOn, Subscription, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('test@example.com'),
    password: new FormControl('secret'),
  });
  storeSub: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const subscription: Subscription = this.authService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: (response) => {
          // sessionStorage.setItem('auth-token', response.token);
          console.log('Auth response:', response);
          this.router.navigate(['users']);
        },
        error: (e) => console.error(e),
        complete: () => subscription.unsubscribe()
    });
  }
}
