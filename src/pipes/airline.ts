import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'airlineFilter',
})
export class AirlinePipe implements PipeTransform {

  transform(airlines: any[], search: string): any {
    if (!airlines) {
      return;
    } else if (!search) {
      return airlines;
    } else {
      let term = search.toLowerCase();
      return airlines.filter(airline => airline.name.toLowerCase().indexOf(term) > -1);
    }
  }
}