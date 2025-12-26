import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../core/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  email = '';
  password = '';

  private auth = inject(Auth);
  private router = inject(Router);
  
  onSubmit(){
    this.auth.login(this.email, this.password)
    .subscribe({
      next: Response => {
        console.log('Login success:', Response);

        this.router.navigate(['/task']);

      },
      error: err => {
        console.log('Login failed', err);
      }
    })
    console.log('Email:', this.email);
    console.log('password:', this.password);
  }
}
