import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };
  movementForm: any;
  users: string[];
  banks: string[];
  groups: string[];

  constructor(private calendar: NgbCalendar, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.users = ['Marcelo', 'Gaby'];
    this.banks = ['Barclays'];
    this.groups = ['Super', 'Petrol', 'Rent House'];
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
