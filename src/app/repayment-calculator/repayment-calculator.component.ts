import { Component } from '@angular/core';
import { UserInputRepaymentComponent } from "./user-input-repayment/user-input-repayment.component";
import { HeaderRepaymentComponent } from "./header-repayment/header-repayment.component";
import { ResultsRepaymentComponent } from "./results-repayment/results-repayment.component";
import { MonthlyResult, RepaymentResultData, UserInputRepayment, YearlyResult } from './input-repayment.module';

@Component({
  selector: 'app-repayment-calculator',
  standalone: true,
  imports: [UserInputRepaymentComponent, HeaderRepaymentComponent, ResultsRepaymentComponent],
  templateUrl: './repayment-calculator.component.html',
  styleUrl: './repayment-calculator.component.css'
})
export class RepaymentCalculatorComponent {

  repaymentResults?:RepaymentResultData
  yearlyResult?:YearlyResult[]
  monthlyResult?:[MonthlyResult][]



  calclulateRepayment(data:UserInputRepayment){
    // Overall results
    var paidInterest = 0
    var timeMonthTotal = 0
    var counterYear = 0
    var counterMonth = 0
    var problemMessage = ""

      // Yearly Result
    const annualData = []
    var yearlyPaidIntrest = 0
    var yearlyRepayment = 0
    var residualDeptEoY = 0

    //Monthly Result
    var monthlyData = []
    const monthlyDataYear = []
    var monthlyPaidInterest = 0
    var monthlyRepayment = 0

    //Input
    var residualDept = data.loanAmount
    var monthlyInterestPayment:number
    var interestRate = data.intresrRate/100
    var monthlyPayment = data.monthlyRate

    var endOfLoop=false

    while (residualDept > 0) {
      monthlyInterestPayment = residualDept * interestRate/12
      if (monthlyInterestPayment >=monthlyPayment) {
        const minPayment = +monthlyInterestPayment + 1
        problemMessage = "Die monatliche Rate deckt nicht mal die anfallenden Zinsen, für das gewünschte Darlehen ist eine monatliche Rate von MINDESTENS " + minPayment +"€ notwendig. Mehr wäre besser."
        break
      }

      residualDept -= monthlyPayment-monthlyInterestPayment
      paidInterest += monthlyInterestPayment

      monthlyPaidInterest = monthlyInterestPayment
      monthlyRepayment = monthlyPayment-monthlyInterestPayment

      yearlyPaidIntrest += monthlyInterestPayment
      yearlyRepayment += monthlyPayment-monthlyInterestPayment

      timeMonthTotal += 1
      counterMonth += 1

      if (residualDept<0) {
        yearlyRepayment -= residualDept
        monthlyRepayment -= residualDept
        residualDept = 0
        endOfLoop = true
      }

      monthlyData.push({
        month:counterMonth,
        monthlyPaidInterest:monthlyPaidInterest,
        monthlyRepayment:monthlyRepayment,
        residualDeptEoM:residualDept,

      })


      if (counterMonth==12 || endOfLoop) {
        if (data.sRepayment!='0') {
          residualDept -= data.specialRepaymentYearly
          yearlyRepayment += data.specialRepaymentYearly
          monthlyRepayment += data.specialRepaymentYearly
        }
        if (residualDept<0) {
          yearlyRepayment -= residualDept
          residualDept = 0
        }
        counterYear +=1
        annualData.push({
          year:counterYear,
          yearlyPaidIntrest: yearlyPaidIntrest,
          yearlyRepayment: yearlyRepayment,
          residualDeptEoY: residualDept,

        })
        monthlyDataYear.push({
          monthlyData
        })
        // this.monthlyResult[counterYear]=monthlyData

        monthlyData = []
        counterMonth = 0
        yearlyPaidIntrest = 0
        yearlyRepayment = 0
      }
      //TODO: last year calculation here check residualDept <0
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
    this.yearlyResult = annualData
    // this.monthlyResult = monthlyDataYear
  }
}
