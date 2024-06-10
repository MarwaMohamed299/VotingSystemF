import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf,RouterModule,RouterOutlet,ModalModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
}
