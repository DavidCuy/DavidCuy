import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkDialogComponent } from '../../components/work-dialog/work-dialog.component';
import { WorkMade } from '../../interfaces/workmade.interface';

@Component({
  selector: 'app-image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.css']
})
export class ImageThumbComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() title: string;
  @Input() website: string;
  @Input() workDetails: WorkMade;
  @Input() showWeb: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    console.log('open dialog');
    const dialogRef = this.dialog.open(WorkDialogComponent, {
      data: this.workDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

