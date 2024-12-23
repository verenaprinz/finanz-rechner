import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { DetailResult, ResultData, UserInputs } from '../input.module';
import { UserInputComponent } from "./user-input/user-input.component";
import { ResultsComponent } from "./results/results.component";

@Component({
  selector: 'app-rent-buy-calculator',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, ResultsComponent],
  templateUrl: './rent-buy-calculator.component.html',
  styleUrl: './rent-buy-calculator.component.css'
})
export class RentBuyCalculatorComponent {

  resultData?: ResultData
  detailResultData?: DetailResult

  calculate(data:UserInputs){
    const sumMoney = data.totalMonthlyCost* 12 * data.time

    const priceIncPuchaseCost = data.housePrice + (data.housePrice * data.purchaseCosts/100)
    const neededLoan = priceIncPuchaseCost - data.capital
    const sumPaidMaintenance = data.housePrice * data.maintenance/100 * data.time
    const annualRepayment = data.rate *12
    const loanTermExact = - Math.log10(1-data.interestRate/100*neededLoan/annualRepayment)/Math.log10(data.interestRate/100+1)
    const loanTerm = Math.trunc(loanTermExact)
    const houseIncrease = data.housePrice * (1+data.increaseHouse/100) ** data.time - data.housePrice
    // console.log("neededLoan " + neededLoan)
    // console.log("annualRepayment " + annualRepayment)
    // console.log("data.interestRate " + data.interestRate/100)
    // loanTerm = Math.trunc(loanTerm)
    // console.log("loanTerm " + loanTerm)

    var paidInterest = 0
    var loanPayment = 0
    var receivedInterestHouse = 0
    var moneyNotPaidForCreadit = 0
    var residualDept= neededLoan

    const roiEquityCapital = data.capital * ( 1+data.return/100) ** data.time - data.capital
     
    var paidRent = 0
    var newRent = data.rent
    var receivedInterestRent = 0
    var moneyNotPaidInRent = 0

    var yearlyLoanRepayment: number
    var yearlyInterestPayment: number
    var yearlyInterestFromRentNotPaid:number
    const interestRate = data.interestRate /100
    var monthlyLoanRepayment: number
    var monthlyInterestPayment: number
    var sumCalculated = 0

    for (let index = 1; index <= data.time; index++) {
      console.log(index)
      paidRent += newRent * 12
      // console.log("newRent " +newRent)
      // console.log("paidRent " +paidRent)

      if (newRent <= data.totalMonthlyCost) {
        moneyNotPaidInRent += (data.totalMonthlyCost * 12 - newRent*12)
      }
      yearlyInterestFromRentNotPaid = (moneyNotPaidInRent * data.return/100)
      receivedInterestRent += yearlyInterestFromRentNotPaid
      receivedInterestRent += (receivedInterestRent * data.return/100)
      // console.log("moneyNotPaidInRent " +moneyNotPaidInRent)
      // console.log("receivedInterestRent " +receivedInterestRent)
      newRent *= (1+data.increaseRent/100)
      if (residualDept > 0)
      {
        for (let month = 0; month < 12; month++) {
          monthlyInterestPayment = residualDept * interestRate/12
          paidInterest += monthlyInterestPayment
          monthlyLoanRepayment = (data.rate - monthlyInterestPayment)
          loanPayment += monthlyLoanRepayment
          residualDept -= monthlyLoanRepayment
          
        }
        if (residualDept < 0){
          console.log("Payed " + residualDept + " too much")
          loanPayment += residualDept
          moneyNotPaidForCreadit += -residualDept
          receivedInterestHouse += (moneyNotPaidForCreadit * data.return/100)
          residualDept = 0}
      } else if (residualDept == 0){
        moneyNotPaidForCreadit += data.totalMonthlyCost * 12
        receivedInterestHouse += (moneyNotPaidForCreadit * data.return/100)
      }
      console.log("residualDept " +residualDept)
      sumCalculated += annualRepayment
    }
    // TODO: maintenancekosten noch mit berechnen bei Mieten
    const total = receivedInterestRent + roiEquityCapital
    const assetRent = sumMoney + data.capital - paidRent + total
    const assetHouse = sumMoney + receivedInterestHouse - sumPaidMaintenance - paidInterest - loanPayment - residualDept + data.housePrice + houseIncrease
    var advantage = 'neither'
    var advantageValue = Math.abs(assetRent - assetHouse)
    if (Math.abs(assetRent - assetHouse)<10000){
      advantage = 'neither'
    }else if (assetRent < assetHouse) {
      advantage = 'buy'
    }else if (assetRent > assetHouse) {
      advantage = 'rent'
    }

    var advantageAbsolute = ''
    if(assetRent < assetHouse) {
      advantageAbsolute = 'buy'
    }else if (assetRent > assetHouse) {
      advantageAbsolute = 'rent'
    }

    // console.log("sumCalculated " + sumCalculated)
    // console.log("receivedInterestHouse " + receivedInterestHouse)
    // console.log("moneyNotPaidForCreadit " + moneyNotPaidForCreadit)
    // console.log("sumPaidMaintenance " + sumPaidMaintenance)
    // console.log("paidInterest " + paidInterest)
    // console.log("loanPayment " + loanPayment)
    // console.log ("residualDept " + residualDept)
    // console.log ("houseIncrease " + houseIncrease)

    const results = {
      assetRent: assetRent,
      assetBuy: assetHouse,
      advantage: advantage,
      advantageValue:advantageValue,
      years:data.time
    }

    const detailresults = {
      capital:data.capital,
      houseCost:priceIncPuchaseCost,
      neededLoan: neededLoan,
      monthlyRate: data.rate,
      loanTerm: loanTerm,
  
      sumMoneyEarned:sumMoney,
      paidRent:paidRent,
      receivedInterestHouse:receivedInterestHouse,
      receivedInterestRenting:total,
      maintenanceCost:sumPaidMaintenance,
      paidInteres:paidInterest,
      loanPayment:loanPayment,
      residualDept:residualDept,
      houseSellPrice: data.housePrice + houseIncrease,
      advantage:advantageAbsolute,

    }
    this.resultData= results
    this.detailResultData = detailresults
  }
}
