import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestionReadDto } from '../../Dtos/QuestionReadDto';
import { PollServiceService } from '../../Services/poll-service.service';
import { PollReadDto } from '../../Dtos/PollReadDto';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [NgFor],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css',
})
export class PollComponent implements OnInit {
  title: string = '';
  questions: QuestionReadDto[] = [];
  startDate!: Date;
  endDate!: Date;
  pollId = 1;

  constructor(private pollService: PollServiceService) {}

  ngOnInit(): void {
  }

  AddVote(pollId: number): void {
    try {
      console.log('modal is opened');
      console.log(pollId);
      this.pollService.GetPollById(pollId).subscribe((data: PollReadDto) => {
        this.title = data.title;
        this.questions = data.questions;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        
      });
    } catch (error) {
      console.error('Error fetching poll details:', error);
    }
  }
}
