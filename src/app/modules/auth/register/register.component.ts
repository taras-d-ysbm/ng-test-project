import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(private authService: AuthService) { }
  register(email, password) {
    this.authService.register(email, password)
  }

  ngOnInit() {
  }

}
