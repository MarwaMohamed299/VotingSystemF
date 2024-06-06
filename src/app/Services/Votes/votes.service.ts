import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoteAddDto } from '../../Dtos/VoteAddDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotesService {
  constructor(private httpClient: HttpClient) {}

  private Base_URl = 'https://localhost:7129/api/Votes';

  addVote(votes: VoteAddDto[]): Observable<VoteAddDto> {
    return this.httpClient.post<VoteAddDto>(this.Base_URl, votes);
  }
}
