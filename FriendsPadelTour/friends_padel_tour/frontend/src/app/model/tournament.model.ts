import { NumberSymbol } from "@angular/common";
import { DoubleOfPlayers } from "./doubleOfPlayers.model";

export interface Tournament{
  id? : number;
  name : string;
  desription : string;
  tournamentStartDate : string;
  tournamentFinishDate : string;
  inscriptionStartDate : string;
  inscriptionEndDate : string;
  minCouples : number;
  maxCoulples : number;
  registeredCouples : number;
  finished : boolean;
  isFull : boolean;
  firstWinningCouple : DoubleOfPlayers;
  secondWinningCouple : DoubleOfPlayers;
  accepted : boolean;
  players : DoubleOfPlayers[];
  category : number;
  firstPrize : number;
  secondPrize : number;
  localization : string;
  adress : string;
  city : string;
  facility : string;
  postalCode : number;
}
