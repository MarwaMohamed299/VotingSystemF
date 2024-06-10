import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PollComponent } from "./Components/poll/poll.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PollComponent, NavBarComponent, FooterComponent, RouterModule]
})
export class AppComponent {
  title = 'VotingSystemF';
}

