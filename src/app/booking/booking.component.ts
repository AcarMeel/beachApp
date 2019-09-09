import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// Components
import { BookingFormComponent } from "./booking-form/booking-form.component";

// Services
import { BookingService } from "../services/booking.service";


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  selected = 'all';
  tableData = null;
  constructor(private bookingService: BookingService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.onFilter();
  }

  public onFilter() {
    this.tableData = null;
    switch (this.selected) {
      case 'all':
        this.getAllBookings();
        break;
      case 'my':
        this.getMyBookings();
        break;
      case 'date':

        break;

      default:
        break;
    }
  }

  private getAllBookings() {
    this.bookingService.getAllBookings().subscribe(data => {
      this.tableData = data;
    });
  }

  private getMyBookings() {
    this.bookingService.getMyBookings(1).subscribe(data => {
      this.tableData = [data];
    });
  }

  public onOpenForm() {
    let dialogRef = this.dialog.open(BookingFormComponent, {
      height: 'auto',
      width: '1088px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
