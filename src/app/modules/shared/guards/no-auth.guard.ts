import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../../../core/services/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(public router: Router, private storageService: LocalStorageService) { }

  canActivate(): Observable<boolean> {
    if (this.storageService.getToken()) {
      this.router.navigate(['']);
      return of(false);
    }

    return of(true);
  }

}
