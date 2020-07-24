import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {

  transform(data) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }

}
