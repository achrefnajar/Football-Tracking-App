import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataMatchComponent } from './components/data-match/data-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayStadiumComponent } from './components/display-stadium/display-stadium.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamInformationComponent } from './components/team-information/team-information.component';
import { TeamsApiComponent } from './components/teams-api/teams-api.component';
import { TestComponent } from './components/test/test.component';
import { WeatherComponent } from './components/weather/weather.component';




const routes: Routes = [
//http://localhost:4200 home component displayed
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  //http://localhost:4200 login component displayed
  {path:'register', component:SignupComponent},
  {path:'registerAdmin', component:SignupComponent},
  {path:'matches', component:MatchesComponent},
  {path:'allplayers', component:PlayersComponent},
  {path:'addmatch',component:AddmatchComponent},
  {path:'addplayer',component:AddplayerComponent},
  {path:'addteam',component:AddTeamComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'MyMatches',component:MyMatchesComponent},
  // displayMatch/:id => rendre le path
  {path:'displayMatch/:id',component:DisplayMatchComponent},
  {path:'displayTeam/:id',component:TeamInformationComponent},
  {path:'editMatch/:id',component:EditMatchComponent},
  {path:'editTeam/:id',component:EditTeamComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'displayPlayer/:id',component:DisplayPlayerComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent},
  {path:'search',component:SearchComponent},
  {path:'addStadium',component:AddStadiumComponent},
  {path:'editStadium/:id',component:AddStadiumComponent},
  {path:'displayStadium/:id',component:DisplayStadiumComponent},
  {path:'matchData',component:DataMatchComponent},
  {path:'weather',component:WeatherComponent},
  {path:'test',component:TestComponent},
  {path:'teamsApi',component:TeamsApiComponent},
  {path:'loader',component:LoaderComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
