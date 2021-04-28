import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutBlogDesc'
})
export class CutBlogDescPipe implements PipeTransform {

  transform(desc:string, n:number): string {
    return desc.substr(0,n);
  }

}
