import { Injectable } from '@angular/core';
import dayjs from 'dayjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  date = new BehaviorSubject(dayjs());
  currentDate = this.date.value.clone();

  changeMonth(number: -1 | 1) {
    const updatedDate = this.date.getValue().add(number, 'M');
    this.date.next(updatedDate);
  }
}
