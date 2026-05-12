import { Pipe, PipeTransform } from '@angular/core';

// pipe decorator
@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value !== null && value !== undefined && value !== '' ) {
    return value + ' - custom pipe applied';
  } else {
    return " No Data Found ";
  }
}
}
