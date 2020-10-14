import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  social: any[] = [
    {
      icon: 'fa-linkedin-in',
      link: 'https://www.linkedin.com/in/david-cuy-59a3b7129/'
    },
    {
      icon: 'fa-github',
      link: 'https://github.com/DavidCuy'
    },
    {
      icon: 'fa-youtube',
      link: 'https://www.youtube.com/channel/UCZ6FvCE5SRLjQIYV8DhrwHQ'
    }
  ];

    ngOnInit(): void {
    // set up text to print, each item in array is new line
  }
}
