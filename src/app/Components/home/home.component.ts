import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PollComponent } from '../poll/poll.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouterModule, RouterOutlet, PollComponent],
})
export class HomeComponent {
  showPollModal: boolean = false;
  openModal() {
    this.showPollModal = true;
  }
}
