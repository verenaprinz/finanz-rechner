import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { UserInputRepayment } from '../input-repayment.module';

@Component({
  selector: 'app-user-input-repayment',
  standalone: true,
  imports: [NgxSliderModule, FormsModule],
  templateUrl: './user-input-repayment.component.html',
  styleUrl: './user-input-repayment.component.css'
})
export class UserInputRepaymentComponent {
  @Output() calculateRepayment= new EventEmitter<UserInputRepayment>();
  loanAmount = 450000;
  intresrRate = 3.5;
  monthlyRate = 2000;
  specialRepaymentYearly = 0;


  ngOnInit (){
    this.change()
  }

  onChange(){
    this.change()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.change()
  }

  private change(){
    this.calculateRepayment.emit({
      loanAmount: this.loanAmount,
      intresrRate: this.intresrRate,
      monthlyRate: this.monthlyRate,
      specialRepaymentYearly: this.specialRepaymentYearly,
      
    })
  }

}
