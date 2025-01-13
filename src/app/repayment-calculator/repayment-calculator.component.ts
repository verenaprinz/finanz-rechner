import { Component } from '@angular/core';
import { UserInputRepaymentComponent } from "./user-input-repayment/user-input-repayment.component";
import { HeaderRepaymentComponent } from "./header-repayment/header-repayment.component";
import { ResultsRepaymentComponent } from "./results-repayment/results-repayment.component";
import { RepaymentResultData, UserInputRepayment } from './input-repayment.module';

@Component({
  selector: 'app-repayment-calculator',
  standalone: true,
  imports: [UserInputRepaymentComponent, HeaderRepaymentComponent, ResultsRepaymentComponent],
  templateUrl: './repayment-calculator.component.html',
  styleUrl: './repayment-calculator.component.css'
})
export class RepaymentCalculatorComponent {

  repaymentResults?:RepaymentResultData


  calclulateRepayment(data:UserInputRepayment){
    // Overall results
    var paidInterest = 0
    var timeMonthTotal = 1
    var counterYear = 1
    var counterMonth = 1
    var problemMessage = ""

      // Yearly Result
    const annualData = []
    var yearlyPaidIntrest = 0
    var yearlyRepayment = 0

    //Monthly Result
    const monthlyData = []

    //Input
    var residualDept = data.loanAmount
    var monthlyInterestPayment:number
    var interestRate = data.intresrRate/100
    var monthlyPayment = data.monthlyRate

    while (residualDept > 0) {
      monthlyInterestPayment = residualDept * interestRate/12
      if (monthlyInterestPayment >=monthlyPayment) {
        const minPayment = +monthlyInterestPayment + 1
        problemMessage = "Die monatliche Rate deckt nicht mal die anfallenden Zinsen, für das gewünschte Darlehen ist eine monatliche Rate von MINDESTENS " + minPayment +"€ notwendig. Mehr wäre besser."
        break
      }

      residualDept -= monthlyPayment-monthlyInterestPayment
      paidInterest += monthlyInterestPayment

      yearlyPaidIntrest += monthlyInterestPayment
      yearlyRepayment += monthlyPayment-monthlyInterestPayment

      timeMonthTotal += 1
      counterMonth += 1
      if (counterMonth==12) {
        counterYear +=1
        counterMonth = 0
        yearlyPaidIntrest = 0
        yearlyRepayment = 0
        // TODO: special repayment HERE
      }

    }
    var paidTotal = data.loanAmount + paidInterest
    const result={
      loanTermMonthTotal: timeMonthTotal,
      loanTermYears:counterYear,
      loanTermMonath:counterMonth,
      paidTotal: paidTotal,
      paidInterests: paidInterest,
      problemMessage:problemMessage,

    }
    this.repaymentResults = result
  }
}
