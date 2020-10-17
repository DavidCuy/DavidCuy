import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private lang = new BehaviorSubject('es');
  sharedMessage = this.lang.asObservable();

  constructor() { }

  updateLang(lang: string): void {
    this.lang.next(lang);
  }
}
