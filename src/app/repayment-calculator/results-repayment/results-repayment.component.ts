import { Component, Input } from '@angular/core';
import { RepaymentResultData } from '../input-repayment.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results-repayment',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results-repayment.component.html',
  styleUrl: './results-repayment.component.css'
})
export class ResultsRepaymentComponent {
 @Input () results?:RepaymentResultData
}
