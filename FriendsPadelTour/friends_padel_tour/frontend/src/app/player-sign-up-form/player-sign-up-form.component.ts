import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player.model';
import { User } from '../model/user.model';
import { SignUpService } from '../Service/signup.service';

@Component({
  selector: 'app-player-sign-up-form',
  templateUrl: './player-sign-up-form.component.html'
})
export class PlayerSignUpFormComponent implements OnInit {

  Category:number[] = [1,2,3,4,5,6]
  listProvinces:string[] = ["Álava","Albacete","Alicante","Almería","Ávila","Asturias"];

  player: Player | undefined;
  user: User;


  signUpPlayer(username:string,name :string,surname:string, email:string,password:string,location:string,division: string){
    this.user = {password: password, userName:username, roles: ['PLAYER']}

    this.player = {username: this.user.userName, name: name,surname:surname,email:email,  division: parseInt(division),hasImage:false,location:location,matchesLost: 0,matchesPlayed:0,matchesWon:0,createdMatches:[],pendingMatches:[],playedMatches:[],user: this.user, score: 0,doubles:[],imagePath:''}
    this.SignUpService.signUpPlayer(this.player).subscribe(
      data => console.log("Jugador registrado correctamente"),
      error => console.error("Error al crear el jugador")
    )
  }


  constructor(private SignUpService: SignUpService) {
    this.user = {userName: '', password:'', roles:['']}
  }

  ngOnInit(): void {
  }

}
