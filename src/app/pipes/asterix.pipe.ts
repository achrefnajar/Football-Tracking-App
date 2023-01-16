import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch) {
    var res='';
    var voyels=['a','e','u','i','y','o'];
    
    for (let i = 0; i < ch.length; i++) {
     var x = ch[i];
      for (let j = 0; j < voyels.length; j++) {
       if (ch[i].toLowerCase()==voyels[j]) {
        x='*'
        break;
       } 
      }
      res=res+x;
    }
    return res;
  }

}
