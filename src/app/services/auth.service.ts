import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false
  constructor(private http: HttpClient) { }

  logIn() {
    this.isLogged = !this.isLogged
    alert(this.isLogged)
    localStorage.setItem('isLogged', 'true')
    return this.isLogged
  }
  register(username: string, password: string) {
    console.log('kek')
    return this.http.post("https://reqres.in/api/register",
      {
        "email": username,
        "password": password
      }
    )
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error", error);

        }

      );

  }

}
