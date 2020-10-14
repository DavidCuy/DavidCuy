import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

// Shared componentes
import {
  ImageThumbComponent,
  WorkDialogComponent,
  ImageCardComponent,
  NavbarComponent
} from './components/components.index';

// Pages components
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageThumbComponent,
    WorkDialogComponent,
    ImageCardComponent,
    NavbarComponent,
    IndexComponent
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
