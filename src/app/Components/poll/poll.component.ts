import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestionReadDto } from '../../Dtos/QuestionReadDto';
import { PollServiceService } from '../../Services/polls/poll-service.service';
import { PollReadDto } from '../../Dtos/PollReadDto';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { VotesService } from '../../Services/Votes/votes.service';
import { VoteAddDto } from '../../Dtos/VoteAddDto';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css',
  providers: [CookieService],
})
export class PollComponent implements OnInit {
  title: string = '';
  questions: QuestionReadDto[] = [];
  startDate!: Date;
  endDate!: Date;
  pollId = 1;
  sessionId: string = '';
  isButtonDisabled: boolean = false;
  selectedOptions: { [key: number]: number } = {};
  voterId: number | null | undefined;
  constructor(
    private pollService: PollServiceService,
    private voteService: VotesService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.checkSessionId();
  }
  checkSessionId(): void {
    this.sessionId = this.cookieService.get('sessionId');
    this.isButtonDisabled = !!this.sessionId;
  }

  GetPoll(pollId: number): void {
    try {
      console.log('modal is opened');
      this.pollService.GetPollById(pollId).subscribe((data: PollReadDto) => {
        this.title = data.title;
        this.questions = data.questions;
        this.startDate = data.startDate;
        this.endDate = data.endDate;

        // this.cookieService.set('sessionId', 'your-session-id-value');
        // this.checkSessionId();
      });
    } catch (error) {
      console.error('Error fetching poll details:', error);
    }
  }

  addVote(): void {
    try {
      console.log('submit is clicked');
      const votes: VoteAddDto[] = [];
      for (const questionId in this.selectedOptions) {
        const optionId = this.selectedOptions[questionId];
        if (optionId) {
          votes.push(new VoteAddDto(this.voterId, optionId, new Date()));
        }
      }
      this.voteService.addVote(votes).subscribe((data: VoteAddDto) => {
        console.log('Votes submitted successfully:', data);
      });
    } catch (error) {
      console.error('Error submitting votes:', error);
    }
  }
}
