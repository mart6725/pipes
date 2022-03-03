import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{      // lihtne pipe mis v6tab sisse stringi ja tagasi saame esimesed kuni limit t2hte
    transform(value:any, limit:number){                 // teine argument millega saab htmlis muuta v2ljundit
        if(value.length>limit){                         // argumente v6ib palju olla
            return value.substr(0, limit )+ '...';
        }
        return value;
        
    }

}