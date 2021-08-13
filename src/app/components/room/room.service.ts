import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL = 'http://localhost:8080/api/v1/rooms';

  constructor(private httpClient: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getRoomList(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }
}
