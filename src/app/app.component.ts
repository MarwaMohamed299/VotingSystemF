import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollComponent } from "./Components/poll/poll.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PollComponent]
})
export class AppComponent {
  title = 'VotingSystemF';
}
