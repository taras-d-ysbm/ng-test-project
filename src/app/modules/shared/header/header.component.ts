import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../core/services'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private storageService: LocalStorageService) { }

  logout() {
    this.storageService.removeToken()
    window.location.reload()
  }

  ngOnInit() {
  }

}
