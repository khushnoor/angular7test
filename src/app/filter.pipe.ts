import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
items=items.filter( it => {
    let val= (it.title || '') ;
      return val.toLowerCase().includes(searchText.toLowerCase());
    });

return items;
   }
}
