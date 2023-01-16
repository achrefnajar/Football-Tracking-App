import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(objs:any,term:any){
    if (term === undefined) {
      return objs;
      }
      return objs.filter((obj)=> {
      return (obj.teamone.toLowerCase().includes(term.toLowerCase()) 
      || obj.teamtwo.toLowerCase().includes(term.toLowerCase()));
      })
  
  }

}
