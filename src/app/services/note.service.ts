import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Note } from '../models/note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  URL:string="http://localhost:3000/notes";

  constructor(private http: HttpClient) { }
  
  getNotes():Observable<Array<Note>>
  {
    return this.http.get<Array<Note>>(this.URL);
  }
  addNote(data:any):Observable<Note>
  {
    return this.http.post(this.URL,data);
  }
}
