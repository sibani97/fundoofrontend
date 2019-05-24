import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar } from '@angular/material';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashdata:any;
  constructor(private noteService:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    console.log("get alltrash  note");
    this.noteService.getRequest('note/getTrash?trash=true&archive=false').subscribe
      ((response: any) => {
        this.trashdata = response,
          console.log("#######", response)
      })


//this.getNoteTrash()
  }



// getNoteTrash(){
//   console.log("Trashed Notes")
//   this.noteService.getRequestNote('note/getnote?',true,false).subscribe(
//     response=>{
//       console.log(response)

//       this.trashdata=response['body'];
//       console.log("Trashed Notes",this.trashdata)
//     }
 

//   )
// }
}
