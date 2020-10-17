import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies-bar',
  templateUrl: './cookies-bar.component.html',
  styleUrls: ['./cookies-bar.component.css']
})
export class CookiesBarComponent implements OnInit {

  cookiesSet: string;
  showBar: boolean;

  constructor(private cookies: CookieService) {
    this.cookiesSet = this.cookies.get('cookiesSet');
    if (this.cookiesSet.toUpperCase() === 'YES') {
      this.showBar = false;
    }
    else {
      this.showBar = true;
    }
  }

  ngOnInit(): void {
  }

  setCookies(): void {
    this.cookies.set('cookiesSet', 'YES');
  }

}
