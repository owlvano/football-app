import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idsFilter'
})
export class IdsFilterPipe implements PipeTransform {

  transform(competitions: any, idList: number[]): any {
    if (idList === undefined) {
      return competitions;
    }
    return competitions.filter(
      competition => idList.includes(competition.id)
      );
  }

}
