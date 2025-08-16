import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(itemList: any [], searchText: string,key:string): any[] { 
    debugger;
    if(searchText != '') {
      const serachVal =  searchText.toLocaleLowerCase();
      // return itemList.filter(item=>{
      //   return item.toString().toLowerCase().includes(serachVal)
      // });

      // return itemList.filter(item=>{
      //   return item.toString().toLowerCase().startsWith(serachVal)
      // });
      
      return itemList.filter(item=>{
        const value =  key ? item[key]:item
        return value.toString().toLowerCase().startsWith(serachVal)
      });
    } else {
      return itemList;
    }
    
  }

}
