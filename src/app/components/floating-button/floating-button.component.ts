import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {
  @Input() telNumber: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
