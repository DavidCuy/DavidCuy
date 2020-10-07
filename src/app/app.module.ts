import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageThumbComponent } from './shared/image-thumb/image-thumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { WorkDialogComponent } from './components/work-dialog/work-dialog.component';
import { ImageCardComponent } from './shared/image-card/image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageThumbComponent,
    WorkDialogComponent,
    ImageCardComponent
  ],
  entryComponents: [
    WorkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
