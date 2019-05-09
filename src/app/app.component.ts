import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-project';

  $loggedIn: Observable<boolean>
  $loogedInSubscription: Subscription
  loggedIn: boolean

  constructor(private authService: AuthService) { }



}
