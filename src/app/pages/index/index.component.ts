import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Knowledge, Skill, Work, StartUp } from '../../interfaces/interface.index';

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

  aText: string[] = [
    'Hi! I\'m David',
    'A FullStack developer',
    'Want to see my work?'
  ];

  knowledges: Knowledge[] = [
    {
      image: 'assets/images/skills/backend.svg',
      title: 'Backend',
      description: 'I worked with multiple language and technologies in backend. Including Serverless',
      skills: [
        {
          name: 'PHP - Framework Laravel',
          hability: 99,
          moreInfo: true
        },
        {
          name: 'Python - Serverless Framework',
          hability: 80,
          moreInfo: true
        },
        {
          name: 'SQL - MySQL',
          hability: 85,
          moreInfo: false
        }
      ]
    },
    {
      image: 'assets/images/skills/frontend.svg',
      title: 'FrontEnd',
      description: 'I love to work with interface, making things look good',
      skills: [
        {
          name: 'HTML',
          hability: 99,
          moreInfo: false
        },
        {
          name: 'CSS',
          hability: 99,
          moreInfo: false
        },
        {
          name: 'Javascript',
          hability: 99,
          moreInfo: false
        },
        {
          name: 'Angular >v6',
          hability: 90,
          moreInfo: true
        }
      ]
    },
    {
      image: 'assets/images/skills/devops.svg',
      title: 'DevOps',
      description: 'I\'m in continuous improvement with best practices for delivery of clean code',
      skills: [
        {
          name: 'AWS',
          hability: 80,
          moreInfo: true
        },
        {
          name: 'Bitbucket pipelines',
          hability: 80,
          moreInfo: false
        }
      ]
    },
    {
      image: 'assets/images/skills/terminal.svg',
      title: 'Others',
      description: 'Like mecathronics engineer I have other skills and passions',
      skills: [
        {
          name: 'Firmware Development',
          hability: 85,
          moreInfo: true
        },
        {
          name: 'Electronic circuit design',
          hability: 70,
          moreInfo: true
        },
        {
          name: 'Computer vision',
          hability: 75,
          moreInfo: false
        },
        {
          name: 'Embedded system development',
          hability: 85,
          moreInfo: false
        },
        {
          name: 'IoT architecture',
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
        title: 'PHP - Framework Laravel',
        description: 'I worked in a shipments and landings modules for Katcon\'s suppliers. I was a sub-employee from Digital Catus Mx',
        details: []
      }
    },
    {
      imageUrl: 'assets/images/work/pollposition.jpeg',
      title: 'Public opinion massive caller',
      website: 'http://pollposition.info/',
      showWeb: true,
      workMade: {
        title: 'Laravel / Angular',
        // tslint:disable-next-line:max-line-length
        description: 'In pollposition I worked with a team in both sides, backend and frontend. In this case I worked more often in backend. \n' +
                      'The principal target was created interactive automated phone calls inquests for massive calls',
        details: [{
          name: 'Twilio',
          description: 'We used Twilio programmable voice for build the automated conversations'
        }, {
          name: 'IFT algorithm',
          description: 'We implement an algorithm for generated real phone numbers using IFT (Instito Federal de Telecomunicaciones) information'
        }, {
          name: 'Passport',
          description: 'We use Passport first-party client API'
        }, {
          name: 'Queues',
          description: 'An inquest could be realized for a entired city, so we implements severals queues for dispatching calls according with available phone callers'
        }, {
          name: 'DevOps',
          description: 'I implemented DevOps workflow. For backend I used Envoy and for frontend I used bitbucket pipelines. Both were deployed on AWS, EC2 and S3 respectively'
        }]
      }
    },
    {
      imageUrl: 'assets/images/work/swapp.jpeg',
      title: 'Taxi\'s platform for public transportation',
      website: 'https://swappcloud.com/',
      showWeb: true,
      workMade: {
        title: 'Laravel / Python',
        description: 'We made a complete platform for proccess electronic (credit card, SPEI, etc) and cash payments, driver balance and invoice emitter system',
        details: [{
          name: 'Openpay',
          description: 'I made a payment gateway in a microservice using PHP SDK for process payment. The gateways get requests from mobile app and core web serve.' +
                        'This gateway could be integrated like a first-party in core server'
        }, {
          name: 'Emite',
          description: 'We automatize the process of a taxi driver make an invoice'
        }, {
          name: 'AWS SAM (Python)',
          description: 'To confirm a payments of a taxi driver was successful, I made a AWS Serverless Application Model function to confirm it and fire a notification event in firebase'
        }, {
          name: 'Passport',
          description: 'We use Passport first-party client API'
        }]
      }
    },
    {
      imageUrl: 'assets/images/work/kidscars.jpeg',
      title: 'Kids car rental for malls',
      website: '',
      showWeb: false,
      workMade: {
        title: 'PHP - Framework Laravel',
        description: 'We made a CRM for car rentals based in time. Generate reports by placements and employees',
        details: []
      }
    },
    {
      imageUrl: 'assets/images/work/sinbio.jpeg',
      title: 'Engineering and biotechnology solutions',
      website: 'https://www.sinbio.com.mx',
      showWeb: true,
      workMade: {
        title: 'Firmware / ESP8266',
        description: 'We made a IoT monitoring system for a grease solvent. With a low level of dissolvent the device send an alert to a Slack account',
        details: [
          {
            name: 'ESP8266',
            description: 'We selected ESP8266 microcontroller beacause has a native WiFi integrations in firmware'
          },
          {
            name: 'Arduino Framewok',
            description: 'I programm the microcontroller using Arduino Framework'
          }
        ]
      }
    },
    {
      imageUrl: 'assets/images/work/puntie.jpeg',
      title: 'Startup focus on design and create products to the dance world',
      website: '',
      showWeb: false,
      workMade: {
        title: 'Firmware / ESP32',
        description: 'We made a device can sense an accelerometer and gyroscope to advertise with leds the position of the ballerina\'s foot and advertise the info by bluetooth',
        details: [
          {
            name: 'ESP32',
            description: 'We selected ESP32 microcontroller beacause has a native Bluetooth >4.0 integrations in firmware'
          },
          {
            name: 'Arduino Framewok',
            description: 'I programm the microcontroller using Arduino Framework'
          }
        ]
      }
    }
  ];

  startUps: StartUp[] = [
    {
      imageUrl: 'assets/images/startups/studioav.png',
      description: 'You want your techs ideas comes true. We make it posible, we help business into a digital transition',
      effects: false,
      status: 'Progress',
      url: ''
    },
    {
      imageUrl: 'assets/images/startups/avi.png',
      description: 'Measure, optimize and monetize the energy consumption of your industrial equipments using IoT and data Analytics',
      effects: true,
      status: 'launched',
      url: 'startups/avi'
    }
  ];

  timeouts = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
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
