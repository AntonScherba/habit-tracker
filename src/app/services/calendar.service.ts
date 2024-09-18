import { Injectable } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  date = new BehaviorSubject(dayjs());
  readonly currentDate = this.date.value.clone();

  changeMonth(dir: -1 | 1) {
    const updatedDate = this.date.value.add(dir, 'M');
    this.date.next(updatedDate);
  }

  setDate(date: Dayjs) {
    this.date.next(date);
  }
}
