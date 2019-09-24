import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

// Models
import { PeopleQty } from "../../models/numbers";
import { Element } from "../../models/element";

// Resources
import { peopleQtyResource } from "../../resources/peopleQty.resource";
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

// Services
import { FormService } from "../../services/form.service";



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  numbers: PeopleQty[] = peopleQtyResource;
  maxdate = new Date().setMonth(new Date().getMonth()+3);
  // start date
  minStartDate = new Date();
  maxStartDate = new Date(this.maxdate);
  // end date
  minEndDate = new Date();
  maxEndDate = new Date(this.maxdate);
  matcher = new MyErrorStateMatcher();
  public bookingForm = new FormGroup({
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    peopleQuantity: new FormControl('', [
      Validators.required
    ]),
    confirmationEmail: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    notes: new FormControl('')
  });
  constructor(
    public dialogRef: MatDialogRef<BookingFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formService: FormService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    let form: Element = {
      name: 'User',
      status: 'Pending',
      total: parseInt(this.bookingForm.get('peopleQuantity').value),
      date: this.bookingForm.get('startDate').value
    }
    this.formService.createElement(form);
    this.onNoClick(); 
  }

  onGetDays() {
    const dayStart = this.bookingForm.get('startDate').value;
    const dayEnd = this.bookingForm.get('endDate').value;
    const d1 = (dayStart.getMonth() + 1) + '/' + dayStart.getDate() + '/' +  dayStart.getFullYear();
    const d2 = (dayEnd.getMonth() + 1) + '/' + dayEnd.getDate() + '/' +  dayEnd.getFullYear();
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.abs((date1.getTime() - date2.getTime()) / (oneDay));
    return diffDays;
  }

  get totalCost() {
    let days = 0, cost = 0;
    const notEmpty = this.bookingForm.get('startDate').value !== null && this.bookingForm.get('endDate').value !== null;
    const isValid = this.bookingForm.get('startDate').valid && this.bookingForm.get('endDate').valid;
    const people = this.bookingForm.get('peopleQuantity').value || 0;
    if (notEmpty && isValid) {
      days = this.onGetDays();
      cost = parseInt(people) * days * 30;
    }
    return {
      days,
      cost
    };
  }

  ngOnInit() {
  }

  changeDate(type: string, event: MatDatepickerInputEvent<Date>) {
    if (type === 'start') {
      this.minEndDate = event.value;
    }
  }

}
