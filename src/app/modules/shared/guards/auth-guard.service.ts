import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStorageService } from '../../../core/services/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router, private storageService: LocalStorageService) { }

  canActivate(): Observable<boolean> {
    if (!this.storageService.getToken()) {
      this.router.navigate(['auth/login']);
      return of(false);
    }

    return of(true);
  }
  //   if(!this.storageService.getToken()) {
  //   this.router.navigate(['auth/login']);
  //   return false;
  // }

  // return true;


}
