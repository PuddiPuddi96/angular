import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // constructor(
  //   private investmentService: InvestmentService
  // ) {}

  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData())

  //Alternative to computed
  //results = this.investmentService.resultData.asReadonly();

}
