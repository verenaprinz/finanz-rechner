import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {  DetailResult, ResultData } from '../../input.module';
import { ResultDetailComponent } from "../result-detail/result-detail.component";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe, ResultDetailComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() result?: ResultData;
  @Input() detailResult?: DetailResult;
  isShowDetails = false;

  onShowDetails() {
    this.isShowDetails = true;
  }

  onCloseDetails(){
    this.isShowDetails = false;
  }
}
