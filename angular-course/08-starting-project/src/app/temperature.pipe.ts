import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    if(!value){
      return value;
    }

    let numberValue: number;

    if (typeof value === 'string') {
      numberValue = parseFloat(value);
    } else {
      numberValue = value;
    }

    let outputTemp: number;

    //From Celsius to Fahrenheit
    if(inputType === 'cel' && outputType === 'fah'){
      outputTemp = numberValue * (9 / 5) + 32;
    } 
    //From Fahrenheit to Celsius
    else if(inputType === 'fah' && outputType === 'cel'){
      outputTemp = (numberValue - 32) * (5 / 9);
    } else {
      outputTemp = numberValue;
    }
    
    let symbol: '°C' | '°F'

    if(!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F'
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }

}
