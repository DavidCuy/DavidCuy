import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { fadeInAnimation } from './animations/fade-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeInAnimation ]
})
export class AppComponent implements OnInit {
  telNumber = '9991941528';
  wpText = 'Hi! I saw your web resume. Let\'s talk!';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    // set up text to print, each item in array is new line
  }

  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  fadeInStart(event: any): void {
    console.log(event);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 750);
  }

  fadeInDone(event: any): void {
    console.log(event);
  }
}
