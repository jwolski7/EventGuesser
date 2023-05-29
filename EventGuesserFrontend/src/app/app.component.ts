import { Component } from '@angular/core';
import { HistoricalEvent } from 'src/app/models/historical-event';
import { HistoricalEventsService } from 'src/app/services/historical-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Past Present';
  

  constructor() {}
/*
  ngOnInit(): void {
    this.historicalEventService.getHistoricalEvent().subscribe((result: HistoricalEvent[]) => (this.events = result));
  }

  updateEventList(events: HistoricalEvent[]) {
    this.events = events;
  }

  initNewEvent() {
    this.eventToEdit = new HistoricalEvent();
  }

  editEvent(event: HistoricalEvent) {
    this.eventToEdit = event;
  }*/
}
