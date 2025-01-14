import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YearlyResult } from '../input-repayment.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results-details-repayment',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results-details-repayment.component.html',
  styleUrl: './results-details-repayment.component.css'
})
export class ResultsDetailsRepaymentComponent {
  @Output() close = new EventEmitter<void>();
  @Input() yearlyResult?:YearlyResult[];

  onCancel() {
    this.close.emit();
  }

}
