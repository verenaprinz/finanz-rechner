export interface UserInputRepayment{
    loanAmount: number;
    intresrRate: number;
    monthlyRate: number;
    sRepayment:string;
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
    year:number;
    yearlyPaidIntrest:number;
    yearlyRepayment:number;
    residualDeptEoY:number;
}

export interface MonthlyResult{
    month:number;
    monthlyPaidInterest:number;
    monthlyRepayment:number;
    residualDeptEoM:number;
}