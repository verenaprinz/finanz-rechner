export interface UserInputs{
    housePrice : number,
    rent:number,
    rate:number,
    maintenance:number,
    totalMonthlyCost:number,
    capital:number,
    time:number,

    purchaseCosts:number,
    interestRate:number,

    return:number,
    increaseHouse:number,
    increaseRent:number,
}


export interface ResultData{
    assetRent:number,
    assetBuy:number,
    advantage:string,
    advantageValue: number,
    years:number
}

export interface DetailResult{
    capital:number,
    houseCost:number,
    neededLoan: number,
    monthlyRate: number,
    loanTerm:number,

    sumMoneyEarned:number,
    paidRent:number,
    receivedInterestHouse:number,
    receivedInterestRenting:number,
    maintenanceCost:number,
    paidInteres:number,
    loanPayment:number,
    residualDept:number,
    houseSellPrice:number,
    advantage:string,
}