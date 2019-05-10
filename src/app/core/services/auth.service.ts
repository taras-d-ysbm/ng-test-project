import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, public router: Router, private storageService: LocalStorageService) { }

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
          this.storageService.setToken(data.token)
          // this.isLogged = of(true)
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
          this.storageService.setToken(data.token)
          this.router.navigate([''])

        },
        error => {
          console.log("Error", error);
        }

      );

  }

  isLogged(): Observable<boolean> {
    return this.storageService.getToken() ? of(true) : of(false)
  }

}
