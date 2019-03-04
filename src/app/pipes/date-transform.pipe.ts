import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(value: number): string {
    const dateStr = new Date(value);

    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };

    return dateStr.toLocaleString('en-US', options);
  }

}
