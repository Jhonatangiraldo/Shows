import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(shows: any, args?: any): any {
      if (!shows) {
          return null;
      }
      return shows.filter((item) => item.name.toLowerCase().includes(args.toLowerCase()));
  }

}
