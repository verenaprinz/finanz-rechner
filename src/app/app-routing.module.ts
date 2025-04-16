import { RouterModule, Routes } from "@angular/router";
import { RentBuyCalculatorComponent } from "./rent-buy-calculator/rent-buy-calculator.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { TermsOfUseComponent } from "./terms-of-use/terms-of-use.component";
import { RepaymentCalculatorComponent } from "./repayment-calculator/repayment-calculator.component";
import { HowToComponent } from "./how-to/how-to.component";

export const appRoutes: Routes = [
    {path: '', component:RentBuyCalculatorComponent},
    {path: 'rent-vs-buy', component:RentBuyCalculatorComponent},
    {path: 'repayment', component:RepaymentCalculatorComponent},
    {path: 'how-to', component:HowToComponent},
    {path:'impressum', component:ImpressumComponent},
    {path:'terms-of-use', component:TermsOfUseComponent},
]
  
export class AppRoutingModule {

}