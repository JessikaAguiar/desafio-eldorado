import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth from 'src/app/models/Auth';
import IResponse from 'src/app/models/IResponse';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login-views',
  templateUrl: './login-views.component.html',
  styleUrls: ['./login-views.component.css']
})
export class LoginViewsComponent implements OnInit {
  name: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.auth(this.name, this.password).subscribe((response: IResponse<Auth>) => {
      const token = response.content.token

      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', this.name)
        this.router.navigate(['/dashboard'])
      }
    })
  }

}
