import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winner'
})
export class WinnerPipe implements PipeTransform {

  transform(winner: string, match: any): any {
    if (match === undefined) {
      return winner;
    }
    if (winner === 'HOME_TEAM') {
      return match.homeTeam.name;
    } else if (winner === 'AWAY_TEAM') {
      return match.awayTeam.name;
    } else {
      return winner;
    }
  }

}
