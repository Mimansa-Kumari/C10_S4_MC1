import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  
  id:number=0;
  title:string="";
  content:string="";
  data?:Note;
  
  @Output()
  addingData:EventEmitter<any>=new EventEmitter<any>();
  constructor(private addNotes:NoteService){}

  addNote()
  {
    this.data={ id:this.id,
      title:this.title,
      content:this.content
    }
    this.addNotes.addNote(this.data).subscribe({
      next:d=>{alert(`Note Added`)
      this.addingData.emit(this.data);},
      error:e=>{alert(`Error : ${e}`)}
    });
  }
}
