import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',                                       // pipe nimi
  pure:false,                                           // sellega pipe k2ivitub automaatselt kui lisame uue serveri, j6udlus kannatab
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {    // value v6ib olla ka array v6i misiganes
    const resultArray = [];                             
    if(value.length ===0 || filterString===''){         //kui array on tyhi v6i kasutaja pole inputi pannud tagastame esialgse array
        return value;
    }
    for(const item of value){                           // loopime yle array ja kui array element vastab kasutaja poolt sisestatud
                                                        // stringile siis lykkame elemendi resultarray sisse
        if(item.status=== filterString){
          resultArray.push(item)
        }
       
    }
    return resultArray;                                 // tagastame array


  }

}
