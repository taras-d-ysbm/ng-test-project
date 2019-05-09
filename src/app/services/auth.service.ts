import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false
  constructor(private http: HttpClient, public router: Router) { }

  logIn(username: string, password: string) {
    return this.http.post("https://reqres.in/api/register",
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    )
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          localStorage.setItem('token', data.token)
          this.router.navigate([''])

        },
        error => {

          console.log("Error", error);

        }

      );

  }
  register(username: string, password: string) {
    console.log('kek')
    return this.http.post("https://reqres.in/api/register",
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    )
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          localStorage.setItem('token', data.token)
          this.router.navigate([''])
        },
        error => {

          console.log("Error", error);

        }

      );

  }

}
