import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HistoricalEvent } from 'src/app/models/historical-event';
import { HistoricalEventsService } from 'src/app/services/historical-events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit{
  
  @Input() event?: HistoricalEvent;
  @Output() eventsUpdated = new EventEmitter<HistoricalEvent[]>();

  events: HistoricalEvent[] = []

  constructor(private historicalEventsService: HistoricalEventsService) {}

  ngOnInit(): void {
      
  }

  updateEvent(event: HistoricalEvent) {
    this.historicalEventsService.updateHistoricalEvent(event).subscribe((events: HistoricalEvent[]) => this.eventsUpdated.emit(events));
  }
  deleteEvent(event: HistoricalEvent) {
    this.historicalEventsService.deleteHistoricalEvent(event).subscribe((events: HistoricalEvent[]) => this.eventsUpdated.emit(events));
  }
  createEvent(event: HistoricalEvent) {
    this.historicalEventsService.createHistoricalEvent(event).subscribe((events: HistoricalEvent[]) => this.eventsUpdated.emit(events));
  }
}
