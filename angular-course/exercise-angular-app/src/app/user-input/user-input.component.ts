import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter();
  calculate = output<{
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number,
  }>();

  enteredInitialInvestment = signal('1');
  enteredAnnualInvestment = signal('2');
  enteredExpectedReturn = signal('3');
  enteredDuration = signal('4');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
  }

}
