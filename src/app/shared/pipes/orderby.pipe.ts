import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
})
export class OrderbyPipe implements PipeTransform {
  transform(array: any, field: string, secField: string = ''): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    array.sort((a, b) => {
      let fa = secField !== '' ? a[field][secField] : a[field],
        fb = secField !== '' ? b[field][secField] : b[field];

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    return array;
  }
}
