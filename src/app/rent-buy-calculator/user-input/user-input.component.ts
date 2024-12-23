import { Component, EventEmitter,Output, ChangeDetectionStrategy, SimpleChanges, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { UserInputs } from '../../input.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [NgxSliderModule, FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // minValue: number = 10;
  // maxValue: number = 90;
  // options: Options = {
  //   floor: 0,
  //   ceil: 100,
  //   step: 10,
  //   showTicks: true
  // };


  @Output() calculate= new EventEmitter<UserInputs>();
  enteredHousePrice = 500000
  enteredRent = 1800
  enteredMonthlyRate = 2500
  enteredMaintenance = 1.5
  enteredEquityCapital = 100000
  enteredTime = 20

  enteredPurchaseCosts = 11
  enteredInteresRate = 4

  enteredExpectedReturn = 5
  enteredValueIncrease = 1
  enteredRentIncrease = 1

  totalMonthlyCost = 3125

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
    this.calculate.emit({
      housePrice : this.enteredHousePrice,
      rent: this.enteredRent,
      rate: this.enteredMonthlyRate,
      maintenance: this.enteredMaintenance,
      totalMonthlyCost:this.enteredMonthlyRate + this.enteredHousePrice/12*this.enteredMaintenance/100,
      capital: this.enteredEquityCapital,
      time: this.enteredTime,
  
      purchaseCosts: this.enteredPurchaseCosts,
      interestRate: this.enteredInteresRate,
  
      return: this.enteredExpectedReturn,
      increaseHouse: this.enteredValueIncrease,
      increaseRent: this.enteredRentIncrease,
    })
  }

  monthlyMaintenance(){
    return (this.enteredHousePrice/12*this.enteredMaintenance/100).toFixed(2)
  }

  totalMonthlyCostHouse(){
    return (this.enteredMonthlyRate + this.enteredHousePrice/12*this.enteredMaintenance/100).toFixed(2)
  }

}
