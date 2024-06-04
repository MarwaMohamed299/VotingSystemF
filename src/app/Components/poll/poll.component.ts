import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [NgFor],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent {
vote(){}
}
