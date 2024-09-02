import { Component, inject, OnInit } from '@angular/core';
import { CalendarService } from '@app/services/calendar.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Dayjs } from 'dayjs';
import { range } from '@app/utils';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  calendarService = inject(CalendarService);

  calendar: Dayjs[] = [];

  ngOnInit() {
    this.calendarService.date.subscribe((date) => this.generateCalendar(date));
  }

  generateCalendar(date: Dayjs) {
    const daysInMonth = date.daysInMonth();
    const days = range(1, daysInMonth);

    this.calendar = days.map((day) => date.clone().set('D', day));
  }
}
