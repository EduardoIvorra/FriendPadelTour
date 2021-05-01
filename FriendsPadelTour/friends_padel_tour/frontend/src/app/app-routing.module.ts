import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessProfileComponent } from './bussiness-profile/bussiness-profile.component';
import { BussinessSignUpFormComponent } from './bussiness-sign-up-form/bussiness-sign-up-form.component';
import { ErrorsComponent } from './errors/errors.component';
import { IndexComponent } from './index/index.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PlayerSignUpFormComponent } from './player-sign-up-form/player-sign-up-form.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'error', component: ErrorsComponent },
  { path: 'login', component: LoginFormComponent, },
 { path: 'player/signUp', component: PlayerSignUpFormComponent },
 { path: 'bussiness/signUp', component: BussinessSignUpFormComponent },
 { path: 'player/:userName', component: PlayerProfileComponent },
 { path: 'bussiness/:userName', component: BussinessProfileComponent },
 { path: '', redirectTo: 'index', pathMatch: 'full' },
 { path: '**', component: ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
