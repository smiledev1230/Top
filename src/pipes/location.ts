import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter',
})
export class LocationPipe implements PipeTransform {

  transform(locations: any[], search: string): any {
    if (!locations) {
      return;
    } else if (!search) {
      return locations;
    } else {
      let term = search.toLowerCase();
      return locations.filter(location => location.name.toLowerCase().indexOf(term) > -1 && location.position.toLowerCase().indexOf(term) > -1);
    }
  }
}
