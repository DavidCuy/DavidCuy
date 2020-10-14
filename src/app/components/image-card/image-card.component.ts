import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() description: string;
  @Input() effects: boolean;
  @Input() status: string;

  PROGRESS = 1;
  CLOSED = 2;
  LAUNCHED = 3;

  statusNum: number = this.CLOSED;
  constructor() { }

  ngOnInit(): void {
    this.statusNum = this.getStatus(this.status);
  }

  getStatus(statuStr: string): number {
    if (statuStr.toUpperCase() === 'PROGRESS') {
      return this.PROGRESS;
    } else if (statuStr.toUpperCase() === 'LAUNCHED') {
      return this.LAUNCHED;
    } else if (statuStr.toUpperCase() === 'CLOSED') {
      return this.CLOSED;
    }
    return this.CLOSED;
  }

}
