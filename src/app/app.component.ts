import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, LocalStorageService } from './core/services'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-project';


  loggedIn: boolean

  constructor(private authService: AuthService, private storageService: LocalStorageService) { }

  ngOnInit() {
    this.authService.isLogged().subscribe(val => {
      console.log('log', val)
      return this.loggedIn = val
    })
  }


}
