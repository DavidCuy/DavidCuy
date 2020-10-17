import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// Shared componentes
import {
  ImageThumbComponent,
  WorkDialogComponent,
  ImageCardComponent,
  NavbarComponent,
  CookiesBarComponent,
  FloatingButtonComponent
} from './components/components.index';

// Pages components
import { IndexComponent } from './pages/index/index.component';
import { AviComponent } from './pages/projects/avi/avi.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
// import { FloatingButtonComponent } from './components/floating-button/floating-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageThumbComponent,
    WorkDialogComponent,
    ImageCardComponent,
    NavbarComponent,
    IndexComponent,
    CookiesBarComponent,
    FloatingButtonComponent,
    AviComponent,
    CloseButtonComponent
  ],
  entryComponents: [
    WorkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
