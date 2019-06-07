import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { DataService } from 'src/app/service/data-service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
message:any;
note:any[];
@Input() noteData: any;
  constructor(private noteService:NoteService,private dataService:DataService) { }

  ngOnInit() {
    this.dataService.recentMessage.subscribe
    ((response:any)=>{
      this.getAllNote();
    });
  }


  getAllNote()
  {
    console.log("get reminder note");
    this.noteService.getRequest("note/getReminder?noteId"+this.noteData.noteId).subscribe
    ((response:any)=>
    {
      this.note=response;
    });
  }

}
