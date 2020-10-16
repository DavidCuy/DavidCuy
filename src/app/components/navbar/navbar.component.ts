import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() email;

  constructor() { }

  ngOnInit(): void {
  }

  download_resume(): void {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/files/CV___David_Cuy_Sanchez___EN.pdf';
    link.download = 'CV___David_Cuy_Sanchez___EN.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
