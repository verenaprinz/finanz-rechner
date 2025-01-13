export interface UserInputRepayment{
    loanAmount: number;
    intresrRate: number;
    monthlyRate: number;
    specialRepaymentYearly: number;

}

export interface RepaymentResultData{
    loanTermMonthTotal: number;
    loanTermYears:number;
    loanTermMonath:number;
    paidTotal: number;
    paidInterests: number;
    problemMessage:string;
}

export interface YearlyResult{
    yearlyPaidIntrest:number;
    yearlyRepayment:number;
    residualDeptEoY:number;
}

export interface MonthlyResult{
    monthlyPaidInterest:number;
    monthlyRepayment:number;
    residualDeptEoM:number;
}