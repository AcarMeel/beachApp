import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-drawer',
  templateUrl: './booking-drawer.component.html',
  styleUrls: ['./booking-drawer.component.css']
})
export class BookingDrawerComponent implements OnInit {
  @Input('drawer-data') data;
  public detailsData: any = null;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getMyBookingDetails();
  }

  private getMyBookingDetails() {
    this.bookingService.getBookingDetails(this.data.id).subscribe(data => {
      this.detailsData = data;
    });
  }

}
