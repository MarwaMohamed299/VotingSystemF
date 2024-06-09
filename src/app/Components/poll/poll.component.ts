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
  sessionToken: string = '';
  isButtonDisabled: boolean = false;
  selectedOptions: { [key: number]: number } = {};
  voterId: number | null = null;
  token: string = '';
  constructor(
    private pollService: PollServiceService,
    private voteService: VotesService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.checkSessionToken();
  }
  checkSessionToken(): void {
    this.sessionToken = this.cookieService.get('session token');
    this.isButtonDisabled = !!this.sessionToken;
  }

  GetPoll(pollId: number): void {
    try {
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

  addVote(): void {
    try {
      const votes: VoteAddDto[] = [];
      for (const questionId in this.selectedOptions) {
        const optionId = this.selectedOptions[questionId];
        if (optionId) {
          votes.push(
            new VoteAddDto(this.voterId, optionId, new Date(), this.token)
          );
        }
      }
      this.voteService.addVote(votes).subscribe(
        (response: any) => {
          console.log('Votes submitted successfully:', response);
          const receivedToken = response.token;
          this.cookieService.set('session token', receivedToken);
          this.token = receivedToken;
          this.checkSessionToken();
        })
    } catch (error) {
      console.error('Error submitting votes:', error);
    }
  }
}
