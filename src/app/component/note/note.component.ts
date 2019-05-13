import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { Note } from 'src/app/model/note';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/service/note-service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
   note:any[];
  // noteService:NoteService=new NoteService();

  constructor(private httpservice:HttpService,private snackBar: MatSnackBar,private noteService:NoteService) { }

  
  ngOnInit()
  {
    
    console.log("get all note");
    this.noteService.getRequest('note/getnote?trash=false&archive=false').subscribe
    ((response:any)=>{
      this.note=response,
      console.log("#######",response)
    })
   

    
    
  }
  

}
