import { Component, Input } from '@angular/core';
import { RepaymentResultData, YearlyResult } from '../input-repayment.module';
import { CurrencyPipe } from '@angular/common';
import { ResultsDetailsRepaymentComponent } from "../results-details-repayment/results-details-repayment.component";

@Component({
  selector: 'app-results-repayment',
  standalone: true,
  imports: [CurrencyPipe, ResultsDetailsRepaymentComponent],
  templateUrl: './results-repayment.component.html',
  styleUrl: './results-repayment.component.css'
})
export class ResultsRepaymentComponent {
 @Input () results?:RepaymentResultData
 @Input () yearlyResult?:YearlyResult[]

 isShowDetails = false

 onShowDetails() {
   this.isShowDetails = true;
 }

 onCloseDetails(){
   this.isShowDetails = false;
 }
}
