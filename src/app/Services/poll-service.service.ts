import { Injectable } from '@angular/core';
import { PollReadDto } from '../Dtos/PollReadDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PollServiceService {
  constructor(private httpClient: HttpClient) {}

  private Base_URL = 'https://localhost:7129/api/Polls';

  GetPollById(id: any): Observable<PollReadDto> {
    return this.httpClient.get<PollReadDto>(`${this.Base_URL}/${id}`);
  }
}
