import { Injectable } from '@angular/core';
import { Element } from "../models/element";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private elementsSubject = new BehaviorSubject<Element>(null);
  constructor() { }

  createElement(element: Element) {
    this.elementsSubject.next(element);
  }

  getElement() : Observable<Element> {
    return this.elementsSubject.asObservable();
  }
}
