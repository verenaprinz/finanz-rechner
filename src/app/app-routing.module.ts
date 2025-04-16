import { RouterModule, Routes } from "@angular/router";
import { RentBuyCalculatorComponent } from "./rent-buy-calculator/rent-buy-calculator.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { TermsOfUseComponent } from "./terms-of-use/terms-of-use.component";
import { RepaymentCalculatorComponent } from "./repayment-calculator/repayment-calculator.component";
import { HowToComponent } from "./how-to/how-to.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: RentBuyCalculatorComponent },
    { path: 'rent-vs-buy', component: RentBuyCalculatorComponent },
    { path: 'repayment', component: RepaymentCalculatorComponent },
    { path: 'how-to', component: HowToComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent },
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule],
  })
  
export class AppRoutingModule {

}