import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-un-archive',
  templateUrl: './un-archive.component.html',
  styleUrls: ['./un-archive.component.scss']
})
export class UnArchiveComponent implements OnInit {
  @Input() noteData: any;
archivedata:any;
  constructor(private noteService:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    

    console.log("get all archive  note");
    this.noteService.getRequest('note/getarchive').subscribe
      ((response: any) => {
        this.archivedata = response,
          console.log("#######", response)
      })

  }


  

  

}
