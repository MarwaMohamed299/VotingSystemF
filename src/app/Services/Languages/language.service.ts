import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  private userLanguage = new BehaviorSubject<string>('en-US');
  userLanguage$ = this.userLanguage.asObservable();

  setLanguage(language: string): void {
    this.userLanguage.next(language);
  }

  getUserLanguage(): string {
    return this.userLanguage.value;
  }
}
