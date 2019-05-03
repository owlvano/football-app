import { Pipe, PipeTransform } from '@angular/core';
import { Winner, Match } from '../models';

@Pipe({
  name: 'winner'
})
export class WinnerPipe implements PipeTransform {

  transform(winner: Winner, match: Match): any {
    if (match === undefined) {
      return winner;
    }

    switch(winner) { 
      case Winner.HomeTeam:  return match.homeTeam.name;
      case Winner.AwayTeam: return match.awayTeam.name;
      case Winner.Draw: return 'Draw';
      default: return winner;
    } 
  }
}
