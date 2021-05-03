import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BussinessSignUpFormComponent } from './bussiness-sign-up-form/bussiness-sign-up-form.component';
import { PlayerSignUpFormComponent } from './player-sign-up-form/player-sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { BussinessProfileComponent } from './bussiness-profile/bussiness-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { ErrorsComponent } from './errors/errors.component';
import { PreviousSignUpComponent } from './previous-sign-up/previous-sign-up.component';
import { FriendlyMatchesComponent } from './friendly-matches/friendly-matches.component';
import { DivisionComponent } from './division/division.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BussinessSignUpFormComponent,
    PlayerSignUpFormComponent,
    LoginFormComponent,
    PlayerProfileComponent,
    BussinessProfileComponent,
    IndexComponent,
    ErrorsComponent,
    PreviousSignUpComponent,
    FriendlyMatchesComponent,
    DivisionComponent,
    TournamentsComponent,
    AboutUsComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }