import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login-service.service';
import { LoggerService } from '../services/logger-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm: FormGroup;
  username: FormControl = new FormControl(['', Validators.required]);
  password: FormControl = new FormControl(['', Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private logger: LoggerService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
    this.username.setValue("")
  }



  submitForm() {
    if (this.loginForm?.valid) {
      const response = this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
      response.subscribe(
        {
          next: ((b) => {
            if (b) {
              this.router.navigate(['/home'])
            } else {
              
            }
          }),
          error: ((e) => {
            this.logger.error(`Login failed: ${e}`)
          })
        }
      )

    }
  }

}
