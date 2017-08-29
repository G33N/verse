import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ObjectArrayPipe'
})
export class ObjectArrayPipe implements PipeTransform {
  transform(obj: any) {
    let result = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }
}
