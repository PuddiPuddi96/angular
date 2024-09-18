import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number) {
    let numberValue: number;

    if (typeof value === 'string') {
      numberValue = parseFloat(value);
    } else {
      numberValue = value;
    }

    //From Celsius to Fahrenheit
    const outputTemp = numberValue * (9 / 5) + 32;

    return `${outputTemp} °F`;
  }

}
