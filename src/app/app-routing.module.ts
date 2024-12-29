import { Routes } from "@angular/router";
import { RentBuyCalculatorComponent } from "./rent-buy-calculator/rent-buy-calculator.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { TermsOfUseComponent } from "./terms-of-use/terms-of-use.component";

export const appRoutes: Routes = [
    {path: '', component:RentBuyCalculatorComponent},
    {path:'impressum', component:ImpressumComponent},
    {path:'terms-of-use', component:TermsOfUseComponent},
]

export class AppRoutingModule {

}