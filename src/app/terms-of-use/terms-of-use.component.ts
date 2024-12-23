import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

}
