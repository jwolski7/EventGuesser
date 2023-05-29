import { Component } from '@angular/core';
import { HistoricalEvent } from 'src/app/models/historical-event';
import { HistoricalEventsService } from 'src/app/services/historical-events.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent {

  events: HistoricalEvent[] = [];
  eventToEdit?: HistoricalEvent;

  constructor(private historicalEventService: HistoricalEventsService) {}

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
  }
}
