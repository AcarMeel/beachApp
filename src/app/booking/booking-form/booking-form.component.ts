import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Models
import { PeopleQty } from "../../models/numbers";

// Resources
import { peopleQtyResource } from "../../resources/peopleQty.resource";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  numbers: PeopleQty[] = peopleQtyResource;
  public bookingForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    peopleQuantity: new FormControl(''),
    confirmationEmail: new FormControl(''),
    notes: new FormControl('')
  });
  constructor(
    public dialogRef: MatDialogRef<BookingFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    alert(`Saving ${JSON.stringify(this.bookingForm.value)}`);
    this.onNoClick();
  }

  ngOnInit() {
  }

}
