import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {
@Input() noteData:any;
  constructor(private noteService:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit() {


  }
  trash()
  {
    console.log("trash note");
    this.noteService.putRequest("trash? noteId=" + this.noteData.noteId,null).subscribe
    ((response:any)=>{
      if(response.statusCode ===300)
      this.snackbar.open("note trashed","undo",{duration:2500});

    }
    );
  }

archive()
{
  console.log("archive note");
  this.noteService.putRequest("archive? noteId="+this.noteData.noteId,null).subscribe(
    (response:any)=>{
      if(response.statusCode===507)
      this.snackbar.open("note archive","undo",{duration:2500});
    }
    
  );
}

}
