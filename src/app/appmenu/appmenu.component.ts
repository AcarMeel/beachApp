import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// Components
import { BookingFormComponent } from "../booking/booking-form/booking-form.component";

// Models
import { PeopleQty } from "../models/numbers";

// Resources
import { peopleQtyResource } from "../resources/peopleQty.resource";

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenDialog() {
    let dialogRef = this.dialog.open(BookingFormComponent, {
      height: 'auto',
      width: '1088px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
