import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };
  movementForm: any;

  constructor(private calendar: NgbCalendar, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.movementForm = this.formBuilder.group({
      date: '',
      user:'',
      bank:'',
      amount: '',
      group: '',
      description: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    
    this.movementForm.reset();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
