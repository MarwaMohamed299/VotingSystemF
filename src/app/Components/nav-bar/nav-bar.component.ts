import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LanguageService } from '../../Services/Languages/language.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf, RouterModule, RouterOutlet, ModalModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  selectedLanguage: string = 'en-US';
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.userLanguage$.subscribe((language) => {
      this.selectedLanguage = language;
    });
  }
  onLanguageChange(): void {
    this.languageService.setLanguage(this.selectedLanguage);
  }
}
