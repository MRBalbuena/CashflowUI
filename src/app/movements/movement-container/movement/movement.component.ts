import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl } from '@angular/forms';
import { USERS, BANKS, GROUPS } from 'src/app/common/constants';
import { IMovementModel } from 'src/app/common/movement.models';

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
  movements: IMovementModel[] = [];

  constructor(private calendar: NgbCalendar, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.users = USERS;
    this.banks = BANKS;
    this.groups = GROUPS;
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
    this.movements.push(customerData);

    this.movementForm.reset();

    console.log(this.movements);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
