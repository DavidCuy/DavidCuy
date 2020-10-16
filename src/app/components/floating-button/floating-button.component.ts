import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {
  @Input() telNumber: string;
  @Input() initialText: string;

  constructor() {
    console.log(this.telNumber);
    this.initialText = encodeURI(this.initialText);
  }

  ngOnInit(): void {
  }

}
