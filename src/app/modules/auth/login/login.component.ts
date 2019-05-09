import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');


  constructor(private authService: AuthService) { }
  logIn(email, password) {
    this.authService.logIn(email, password)

  }

  ngOnInit() {
  }

}
