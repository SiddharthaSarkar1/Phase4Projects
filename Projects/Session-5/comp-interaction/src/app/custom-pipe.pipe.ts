import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeString'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, character:string) {
    return value.split(character).join("-");
}

}
