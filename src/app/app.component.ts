import { Component , ChangeDetectionStrategy} from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterModule, RouterOutlet } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [AppRoutingModule, NavigationComponent, FooterComponent],
  imports: [NavigationComponent, FooterComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
