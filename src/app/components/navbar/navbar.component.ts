import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() email;

  fileName: string;

  constructor(private translate: TranslateService) {
    const lang = this.translate.getDefaultLang();
    console.log(this.translate.getDefaultLang());
    if (lang === 'es') {
      this.fileName = 'CV___David_Cuy_Sanchez';
    } else {
      this.fileName = 'CV___David_Cuy_Sanchez___EN';
    }
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

}
