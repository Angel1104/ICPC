import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CreateEventI } from "../modelos/createEvent.int";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getEvents = 'https://wanting-circle-production.up.railway.app/api/Eventos';
  private getEventId = 'https://wanting-circle-production.up.railway.app/api/Eventos/';
  private deleteEvent = 'https://wanting-circle-production.up.railway.app/api/Eventos/';
  private postEvent = 'https://wanting-circle-production.up.railway.app/api/Eventos/';

  constructor(private http: HttpClient) { }
    
  public getData () : Observable<any> {
    return this.http.get<any>(this.getEvents);
  } 
  public getDataEventId(id : number) : Observable<any> {
    return this.http.get<any>(this.getEventId+id)
  }

  public deleteEventId(id : number) : Observable<any>{
    return this.http.delete<any>(this.deleteEvent+id)
  }

  public createEvent(){}
} 
