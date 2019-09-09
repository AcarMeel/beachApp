import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

// Models
import { Element } from "../../models/element";



// const ELEMENT_DATA: Element[] = [
//   {status: 'Approved', name: 'Melissa', total: 1, date: '04/05/2017'},
//   {status: 'Confirmed', name: 'Claire', total: 4, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Tom', total: 6, date: '04/05/2017'},
//   {status: 'Pending', name: 'Peter', total: 9, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'John', total: 10, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Alicia', total: 12, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Nadia', total: 14, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Orlando', total: 15, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Florencia', total: 18, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Nelson', total: 20, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Sandra', total: 22, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Marta', total: 24, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Amanda', total: 26, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Simon', total: 28, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Patricia', total: 30, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Sofia', total: 32, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Chelsea', total: 35, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Aaron', total: 39, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Pedro', total: 39, date: '04/05/2017'},
//   {status: 'Cancelled', name: 'Catrina', total: 40, date: '04/05/2017'},
// ];

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class BookingTableComponent implements OnInit {
  @Input() ElementData: Element[];
  displayedColumns = ['status', 'name', 'total', 'date'];
  dataSource = new MatTableDataSource<Element>(this.ElementData);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  expandedElement: Element;

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.ElementData;
    this.dataSource.paginator = this.paginator;
  }

}
