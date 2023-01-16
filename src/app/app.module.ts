import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AddTeamComponent } from './components/add-team/add-team.component';

import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchtableComponent } from './components/matchtable/matchtable.component';
import { PlayerstableComponent } from './components/playerstable/playerstable.component';
import { TeamtableComponent } from './components/teamtable/teamtable.component';
import { ArticleComponent } from './components/article/article.component';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { BannerComponent } from './components/banner/banner.component';
import { TeamInformationComponent } from './components/team-information/team-information.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { HttpClientModule} from "@angular/common/http";
import { UsersTableComponent } from './components/users-table/users-table.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { SearchComponent } from './components/search/search.component';
import { MatchItemComponent } from './components/match-item/match-item.component';

import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { DisplayStadiumComponent } from './components/display-stadium/display-stadium.component';
import { DataMatchComponent } from './components/data-match/data-match.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TestComponent } from './components/test/test.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { TeamsApiComponent } from './components/teams-api/teams-api.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    RankingComponent,
    BlogComponent,
    MatchesComponent,
    MatchComponent,
    PlayersComponent,
    PlayerInfoComponent,
    AddmatchComponent,
    AddTeamComponent,
   
    AddplayerComponent,
   
    DashboardComponent,
   
    MatchtableComponent,
   
    PlayerstableComponent,
   
    TeamtableComponent,
   
    ArticleComponent,
   
    MyMatchesComponent,
   
    DisplayMatchComponent,
   
    BannerComponent,
   
    TeamInformationComponent,
   
    EditMatchComponent,
   
    EditTeamComponent,
   
    ReversePipe,
   
    AsterixPipe,
   
    MyFilterPipe,
   
    UsersTableComponent,
   
    EditUserComponent,
   
    ProfileComponent,
   
    DisplayPlayerComponent,
   
    EditPlayerComponent,
   
    SearchComponent,
   
    MatchItemComponent,
   
    
   
    StadiumTableComponent,
   
    
   
    AddStadiumComponent,
   
    
   
    DisplayStadiumComponent,
   
    
   
    DataMatchComponent,
   
    
   
    WeatherComponent,
   
    
   
    TestComponent,
   
    
   
    TeamsApiComponent,
   
    
   
    LoaderComponent,
   
    
   
    NotFoundComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
