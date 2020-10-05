import { AfterContentInit, Component } from '@angular/core';
import { Knowledge } from './interfaces/knowledge.interface';
import { Skill } from './interfaces/skill.interfase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  currentLine = [];
  timer;
  currentIndex = 0;
  reverse = false;
  speed = 70;

  aText: string[] = [
    'Hi! I\'m David',
    'A FullStack developer',
    'Want to see my work?'
  ];

  knowledges: Knowledge[] = [
    {
      image: '../assets/images/skills/backend.svg',
      title: 'Backend',
      description: 'I worked with multiple language and technologies in backend. Including Serverless',
      skills: [
        {
          name: 'PHP - Framework Laravel',
          hability: 95,
          moreInfo: true
        },
        {
          name: 'Python - Serverless Framework',
          hability: 75,
          moreInfo: true
        },
        {
          name: 'SQL - MySQL',
          hability: 80
        }
      ]
    },
    {
      image: '../assets/images/skills/frontend.svg',
      title: 'FrontEnd',
      description: 'I love to work with interface, making things look good',
      skills: [
        {
          name: 'HTML',
          hability: 95
        },
        {
          name: 'CSS',
          hability: 95
        },
        {
          name: 'Javascript',
          hability: 95
        },
        {
          name: 'Angular >v6',
          hability: 95,
          moreInfo: true
        }
      ]
    },
    {
      image: '../assets/images/skills/devops.svg',
      title: 'DevOps',
      description: 'I\'m in continuous improvement with best practices for delivery of clean code',
      skills: [
        {
          name: 'AWS',
          hability: 75,
          moreInfo: true
        },
        {
          name: 'Bitbucket pipelines',
          hability: 80,
          moreInfo: false
        }
      ]
    }
  ];

  ngAfterContentInit(): void {
    // set up text to print, each item in array is new line
    this.currentLine = this.aText[this.currentIndex].split('');
    this.typeWriter();
  }

  public typeWriter(): void {
    if (this.reverse) {
      const innerStr: string = document.getElementById('typedtext').innerHTML;
      if (innerStr.length > 0) {
        this.speed = 70;
        document.getElementById('typedtext').innerHTML = innerStr.slice(0, -1);
      } else {
        this.reverse = false;
        this.speed = 210;
        if (++this.currentIndex === this.aText.length) {
          this.currentIndex = 0;
        }
        this.currentLine = this.aText[this.currentIndex].split('');
        clearTimeout(this.timer);
      }
    }
    else {
      if (this.currentLine.length > 0) {
        this.speed = 70;
        document.getElementById('typedtext').innerHTML += this.currentLine.shift();
      } else {
        this.reverse = true;
        this.speed = 1500;
        this.currentLine = this.aText[this.currentIndex].split('');
        if (this.currentIndex === (this.aText.length - 1)) {
          this.speed = 5000;
        }
        clearTimeout(this.timer);
      }
    }
    this.timer = setTimeout(() => {
      this.typeWriter();
    }, this.speed);
  }

  public moreInfo(skill: Skill): void {
    alert(skill.name);
    console.log(skill);
  }
}
