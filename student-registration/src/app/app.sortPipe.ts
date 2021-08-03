import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name : 'sort'
})

export class SortPipe implements PipeTransform{
    transform(value: any[] , args: string , args2: any) : any{
        let temp = Object.
        keys(value);
        let sortIndex = null;
        let sortVal = null;

        temp.forEach(element => {
            sortIndex = Object.keys(value[element]).indexOf(args2);
            sortVal = Object.values(value[element])[sortIndex];
        });

       
 
        value.sort((a,b) => (-1));        
        
           
        if(args === 'desc'){
            value.sort((a,b) => (1));    
        }


    }
}