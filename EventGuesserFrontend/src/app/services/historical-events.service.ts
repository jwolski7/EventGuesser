import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HistoricalEvent } from 'src/app/models/historical-event';

@Injectable({
  providedIn: 'root'
})
export class HistoricalEventsService {

  private url = "HistoricalEvents";

  constructor(private http: HttpClient) { }

  public getHistoricalEvent(): Observable<HistoricalEvent[]> {
    return this.http.get<HistoricalEvent[]>(`${"https://localhost:7236/api"}/${this.url}/${"GetHistoricalEvents"}`);
  }

  public updateHistoricalEvent(event: HistoricalEvent): Observable<HistoricalEvent[]> {
    return this.http.put<HistoricalEvent[]>(`${"https://localhost:7236/api"}/${this.url}/${"UpdateHistoricalEvent"}`, event);
  }

  public createHistoricalEvent(event: HistoricalEvent): Observable<HistoricalEvent[]> {
    return this.http.post<HistoricalEvent[]>(`${"https://localhost:7236/api"}/${this.url}/${"CreateHistoricalEvent"}`, event);
  }

  public deleteHistoricalEvent(event: HistoricalEvent): Observable<HistoricalEvent[]> {
    return this.http.delete<HistoricalEvent[]>(`${"https://localhost:7236/api"}/${this.url}/${"DeleteHistoricalEvent"}/${event.id}`);
  }
}
