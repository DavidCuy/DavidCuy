import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() email;

  fileName: string;
  flag: string;

  constructor(private translate: TranslateService, private cookies: CookieService, private sharedService: SharedService) {
    const lang = this.translate.getDefaultLang();
    if (lang === 'es') {
      this.flag = 'flag-icon-mx';
      this.fileName = 'CV___David_Cuy_Sanchez';
    } else {
      this.flag = 'flag-icon-us';
      this.fileName = 'CV___David_Cuy_Sanchez___EN';
    }

    this.sharedService.updateLang(lang);
  }

  ngOnInit(): void {
  }

  download_resume(): void {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = `assets/files/${ this.fileName }.pdf`;
    link.download = `${ this.fileName }.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  updateLanguage(language: string): void {
    this.translate.setDefaultLang(language);
    const lang = this.translate.getDefaultLang();
    if (lang === 'es') {
      this.flag = 'flag-icon-mx';
      this.fileName = 'CV___David_Cuy_Sanchez';
    } else {
      this.flag = 'flag-icon-us';
      this.fileName = 'CV___David_Cuy_Sanchez___EN';
    }
    this.cookies.set('language', lang);
    this.sharedService.updateLang(lang);
  }

}
