import { Pipe, PipeTransform } from '@angular/core';

/**
 * numFormatChange - pipe, преобразующий формат числа
 * 1. Если число меньше 1000, pipe вернет его без изменения;
 * 2. Если число больше 1000, pipe сократит его на три знака и вместо них добавит 'k' (kilo-);
 * 3. Второй пункт будет повторяться пока число не станет меньше 1000.
 */
@Pipe({
  name: 'numFormatChange'
})
export class NumFormatChangePipe implements PipeTransform {

  transform(value: number, kilo: string = ''): string {
    if (value < 1000) {
      return value + kilo;
    }
    // value = + (value / 1000).toFixed(1);
    value = Math.floor(value / 100) / 10;
    kilo += 'k';
    return this.transform(value, kilo);
  }
}
