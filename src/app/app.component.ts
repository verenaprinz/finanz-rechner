import { Component , ChangeDetectionStrategy} from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RentBuyCalculatorComponent } from "./rent-buy-calculator/rent-buy-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, NavigationComponent, RentBuyCalculatorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
