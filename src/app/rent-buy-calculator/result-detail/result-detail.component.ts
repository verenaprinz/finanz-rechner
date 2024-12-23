import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailResult, ResultData } from '../../input.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-result-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './result-detail.component.html',
  styleUrl: './result-detail.component.css'
})
export class ResultDetailComponent {
  @Output() close = new EventEmitter<void>();
  @Input() detailResult?: DetailResult;
  @Input() result?: ResultData;

  onCancel() {
    this.close.emit();
  }

}
