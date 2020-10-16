import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AviComponent } from './pages/projects/avi/avi.component';

const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent, data: { animation: 'HomePage' } },
  { path: 'startups/avi', component: AviComponent, data: { animation: 'AviStartupPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
