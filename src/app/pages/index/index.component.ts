import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Knowledge, Skill, Work, StartUp } from '../../interfaces/interface.index';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit, AfterContentInit, OnDestroy {

  currentLine = [];
  timer;
  currentIndex = 0;
  reverse = false;
  speed = 70;

  aText: string[] = [];

  knowledges: Knowledge[] = [
    {
      image: 'assets/images/skills/backend.svg',
      title: '',
      description: '',
      skills: [
        {
          name: '',
          hability: 99,
          moreInfo: true
        },
        {
          name: '',
          hability: 80,
          moreInfo: true
        },
        {
          name: '',
          hability: 85,
          moreInfo: false
        }
      ]
    },
    {
      image: 'assets/images/skills/frontend.svg',
      title: '',
      description: '',
      skills: [
        {
          name: '',
          hability: 99,
          moreInfo: false
        },
        {
          name: '',
          hability: 99,
          moreInfo: false
        },
        {
          name: '',
          hability: 99,
          moreInfo: false
        },
        {
          name: '',
          hability: 90,
          moreInfo: true
        }
      ]
    },
    {
      image: 'assets/images/skills/devops.svg',
      title: '',
      description: '',
      skills: [
        {
          name: '',
          hability: 80,
          moreInfo: true
        },
        {
          name: '',
          hability: 80,
          moreInfo: false
        }
      ]
    },
    {
      image: 'assets/images/skills/terminal.svg',
      title: '',
      description: '',
      skills: [
        {
          name: '',
          hability: 85,
          moreInfo: true
        },
        {
          name: '',
          hability: 75,
          moreInfo: true
        },
        {
          name: '',
          hability: 70,
          moreInfo: false
        },
        {
          name: '',
          hability: 85,
          moreInfo: false
        },
        {
          name: '',
          hability: 90,
          moreInfo: false
        }
      ]
    }
  ];

  recentWorks: Work[] = [
    {
      imageUrl: 'assets/images/work/katcon.jpeg',
      title: 'Supplier to the automotive industry since 1993',
      website: 'https://www.digitalcactus.mx',
      showWeb: true,
      workMade: {
        title: '',
        description: '',
        details: []
      }
    },
    {
      imageUrl: 'assets/images/work/pollposition.jpeg',
      title: '',
      website: 'http://pollposition.info/',
      showWeb: true,
      workMade: {
        title: '',
        // tslint:disable-next-line:max-line-length
        description: '',
        details: [{
          name: '',
          description: ''
        }, {
          name: '',
          description: ''
        }, {
          name: '',
          description: ''
        }, {
          name: '',
          description: ''
        }, {
          name: '',
          description: ''
        }]
      }
    },
    {
      imageUrl: 'assets/images/work/swapp.jpeg',
      title: '',
      website: 'https://swappcloud.com/',
      showWeb: true,
      workMade: {
        title: '',
        description: '',
        details: [{
          name: '',
          description: ''
        }, {
          name: '',
          description: ''
        }, {
          name: '',
          description: ''
        }, {
          name: '',
          description: ''
        }]
      }
    },
    {
      imageUrl: 'assets/images/work/kidscars.jpeg',
      title: '',
      website: '',
      showWeb: false,
      workMade: {
        title: '',
        description: '',
        details: []
      }
    },
    {
      imageUrl: 'assets/images/work/sinbio.jpeg',
      title: '',
      website: 'https://www.sinbio.com.mx',
      showWeb: true,
      workMade: {
        title: '',
        description: '',
        details: [
          {
            name: '',
            description: ''
          },
          {
            name: '',
            description: ''
          }
        ]
      }
    },
    {
      imageUrl: 'assets/images/work/puntie.jpeg',
      title: '',
      website: '',
      showWeb: false,
      workMade: {
        title: '',
        description: '',
        details: [
          {
            name: '',
            description: ''
          },
          {
            name: '',
            description: ''
          }
        ]
      }
    }
  ];

  startUps: StartUp[] = [
    {
      imageUrl: 'assets/images/startups/studioav.png',
      description: '',
      effects: false,
      status: 'Progress',
      url: ''
    },
    {
      imageUrl: 'assets/images/startups/avi.png',
      description: '',
      effects: true,
      status: 'launched',
      url: 'startups/avi'
    }
  ];

  timeouts = [];

  constructor(private translate: TranslateService) {
    // SKILLS
    // tslint:disable-next-line:no-shadowed-variable
    for (const { index, value } of this.knowledges.map((value, index) => ({ index, value }))) {
      value.title = this.translate.instant(`index.skills.${ index }.title`);
      value.description = this.translate.instant(`index.skills.${ index }.description`);

      // tslint:disable-next-line:no-shadowed-variable
      for (const { index2, value2 } of value.skills.map((value2, index2) => ({ index2, value2 }))) {
        value2.name = this.translate.instant(`index.skills.${ index }.skillNames.${ index2 }`);
      }
    }

    // WORKS
    // tslint:disable-next-line:no-shadowed-variable
    for (const { index, value } of this.recentWorks.map((value, index) => ({ index, value }))) {
      value.title = this.translate.instant(`index.works.recents.${ index }.title`);
      value.workMade.title = this.translate.instant(`index.works.recents.${ index }.madeTitle`);
      value.workMade.description = this.translate.instant(`index.works.recents.${ index }.madeDescription`);

      // tslint:disable-next-line:no-shadowed-variable
      for (const { index2, value2 } of value.workMade.details.map((value2, index2) => ({ index2, value2 }))) {
        value2.name = this.translate.instant(`index.works.recents.${ index }.details.${ index2 }.name`);
        value2.description = this.translate.instant(`index.works.recents.${ index }.details.${ index2 }.description`);
      }
    }

    // STARTUPS
    // tslint:disable-next-line:no-shadowed-variable
    for (const { index, value } of this.startUps.map((value, index) => ({ index, value }))) {
      value.description = this.translate.instant(`index.startups.list.${ index }`);
    }
  }

  async resolve_get_translate(index: string): Promise<any> {
    return await this.translate.get(index).toPromise();
  }

  ngOnInit(): void {
  }

  async ngAfterContentInit(): Promise<any> {
    for (let i = 0; i < 3; i++) {
      this.aText.push(await this.translate.get(`index.intro.${ i }`).toPromise());
    }

    // set up text to print, each item in array is new line
    this.currentLine = this.aText[this.currentIndex].split('');
    this.typeWriter();
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i]);
    }
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

    this.timeouts.push(this.timer);
  }

  public moreInfo(skill: Skill): void {
    alert(skill.name);
    console.log(skill);
  }

}
