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

  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  ngOnInit() {
    this.generateCalendar(this.calendarService.date.value);
  }

  ngAfterViewInit() {
    this.viewPort.scrolledIndexChange
      .pipe
      // delay(0),
      // take(1)
      ()
      .subscribe((index) => {
        // const i = this.calendar.findIndex((date) => date.isSame(this.calendarService.currentDate));
        // this.viewPort?.scrollToIndex(Math.max(i - OFFSET, 0), 'instant');

        this.calendarService.setDate(this.calendar[index + OFFSET]);
      });

    // this.viewPort.scrolledIndexChange
    //   .subscribe((index) => {
    //     this.calendarService.setDate(this.calendar[index+OFFSET]);
    //   });
  }

  generateCalendar(date: Dayjs) {
    const daysInMonth = date.daysInMonth();
    const days = range(1, daysInMonth);

    this.calendar = days.map((day) => date.clone().set('D', day));
  }

  onDayChange(date: Dayjs, index: number) {
    this.calendarService.setDate(date);
    this.viewPort?.scrollToIndex(Math.max(index - OFFSET, 0), 'smooth');
  }
}
