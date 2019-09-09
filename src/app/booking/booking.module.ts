import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from '../material.module';

// Modules
import { BookingRoutingModule } from "./booking-routing.module";

// Components
import { BookingComponent } from './booking.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { BookingDrawerComponent } from './booking-drawer/booking-drawer.component';

// Services
import { BookingService } from "../services/booking.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BookingRoutingModule
    ],
    declarations: [
        BookingComponent, 
        BookingFormComponent, 
        BookingTableComponent, 
        BookingDrawerComponent
    ],
    providers: [
        BookingService
    ],
    exports: [BookingComponent],
    entryComponents: [
        BookingFormComponent
    ]
})
export class BookingModule {}