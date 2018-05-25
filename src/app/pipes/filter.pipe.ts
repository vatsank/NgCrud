import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(collection: any[], field: any , value: any): any[] {

     console.log(typeof value);
    if (!collection) {
         return [];
    }
    if (!value || !field) {
      return collection;
  }

  if (isNaN(parseFloat(value))) {
  return collection.filter(item =>
         item[field].toLowerCase().
               includes(value.toLowerCase()));
 } else {

  return collection.filter(item =>
    item[field].toString().includes(value));
}
 }
}
