import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css'
})
export class ImpressumComponent {
  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

}
