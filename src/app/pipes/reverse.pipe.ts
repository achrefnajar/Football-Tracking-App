import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
ch1='';
  transform(ch:string):any {
    
   for (let i = 0; i < ch.length; i++) {
    this.ch1=ch[i]+this.ch1;
    
   }
   return this.ch1;
  }

}
