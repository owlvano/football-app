import { Pipe, PipeTransform } from '@angular/core';
import { Competition } from '../models';

@Pipe({
  name: 'idsFilter'
})
export class IdsFilterPipe implements PipeTransform {

  transform(competitions: Competition[], idList: number[]): any {
    if (idList === undefined) {
      return competitions;
    }
    return competitions.filter(
      competition => idList.includes(competition.id)
      );
  }

}
