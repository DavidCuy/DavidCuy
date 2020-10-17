import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkMade } from '../../interfaces/workmade.interface';

@Component({
  selector: 'app-work-dialog',
  templateUrl: './work-dialog.component.html',
  styleUrls: ['./work-dialog.component.css']
})
export class WorkDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<WorkDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: WorkMade) {
  }

  ngOnInit(): void {
  }

}
