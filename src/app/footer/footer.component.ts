import { Component } from '@angular/core';
import { ImpressumComponent } from "../impressum/impressum.component";
import { TermsOfUseComponent } from "../terms-of-use/terms-of-use.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ImpressumComponent, TermsOfUseComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isShowImpressum = false;
  isShowTermsOfUse = false;

  onShowImpressum() {
    this.isShowImpressum = true;
  }

  onCloseImpressum(){
    this.isShowImpressum = false;
  }

  onShowTermsOfUse () {
    this.isShowTermsOfUse = true;
  }

  onCloseTermsOfUse (){
    this.isShowTermsOfUse = false;
  }
}
