import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Element } from "../models/element";
import { BookingDetails } from "../models/details";


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public baseURL = environment.APIUrl;
  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<Element> {
    const url = `${this.baseURL}all`;
    return this.http.get<Element>(url);
  }

  getMyBookings(id): Observable<Element> {
    const url = `${this.baseURL}all/${id}`;
    return this.http.get<Element>(url);
  }

  getBookingDetails(id): Observable<BookingDetails> {
    const url = `${this.baseURL}details/${id}`;
    return this.http.get<BookingDetails>(url);
  }
}
