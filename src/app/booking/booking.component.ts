import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

// Components
import { BookingFormComponent } from "./booking-form/booking-form.component";

// Services
import { BookingService } from "../services/booking.service";
import { FormService } from "../services/form.service";



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {
  selected = 'all';
  tableData = null;
  public subscription: Subscription;
  constructor(private bookingService: BookingService,
    public dialog: MatDialog,
    private formService: FormService) { 
      this.subscription = this.formService.getElement()
      .subscribe((element) => {
          if (element) {
            let tempData = this.tableData;
            this.tableData = null;
            const newId = tempData.length + 1;
            element['id'] = newId;
            tempData.splice(0,0,element);
            this.tableData = tempData;
          }
      });
    }

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

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}

}
