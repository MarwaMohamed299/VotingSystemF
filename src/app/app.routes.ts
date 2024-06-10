import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PollComponent } from './Components/poll/poll.component';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'AddVote', component: PollComponent },
  { path: '**', component: ErrorComponent },
];

