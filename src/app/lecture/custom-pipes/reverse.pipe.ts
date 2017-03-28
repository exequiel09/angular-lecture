import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value
      .split('') // convert string to array by splitting each character into array's element
      .reverse() // reverse the ordering of the array
      .join('') // concatenate the reversed array to form a reversed string
      ;
  }

}
