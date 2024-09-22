import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarService } from '@app/services/calendar.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Dayjs } from 'dayjs';
import { range } from '@app/utils';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { delay, take } from 'rxjs';

const OFFSET = 3;

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [AsyncPipe, DatePipe, ScrollingModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit, AfterViewInit {
  calendarService = inject(CalendarService);

  calendar: Dayjs[] = [];
  initialized = false;

  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  ngOnInit() {
    this.#generateCalendar(this.calendarService.date.value);
  }

  ngAfterViewInit() {
    this.viewPort.scrolledIndexChange
      .pipe(delay(0), take(1))
      .subscribe(() => this.#waitScrolledChange());
  }

  #waitScrolledChange() {
    const index = this.calendar.findIndex((date) =>
      date.isSame(this.calendarService.currentDate),
    );
    this.scrollToDate(index, 'instant');
  }

  #getDateByIndex(index: number) {
    return this.calendar[index];
  }

  #generateCalendar(date: Dayjs) {
    const daysInMonth = date.daysInMonth();
    const days = range(1, daysInMonth);
    this.calendar = days.map((day) => date.clone().set('D', day));
  }

  onDayScroll(index: number) {
    const date = this.#getDateByIndex(index + OFFSET);
    this.calendarService.setDate(date);
  }

  onDayClick(date: Dayjs, index: number) {
    this.calendarService.setDate(date);
    this.scrollToDate(index);
  }

  scrollToDate(index: number, behavior: ScrollBehavior = 'smooth') {
    this.viewPort?.scrollToIndex(Math.max(index - OFFSET, 0), behavior);
  }

  get isDisabled() {
    const index = this.calendar.findIndex((date) =>
      this.calendarService.date.value.isSame(date),
    );
    return this.calendar.slice(index + 1).length <= 3;
  }
}
