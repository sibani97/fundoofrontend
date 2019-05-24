import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { fadeInItems, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit {
note:any[];
trashdata:any;

  constructor(private noteService:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    console.log("get all trash  note");
    this.noteService.getRequest('note/getTrash').subscribe
      ((response: any) => {
        this.note = response,
          console.log( response)
      })

    
  }

// perDelete(items)
// {
//   console.log("note delete permanently");
//   console.log("delete"+items.id);
//   this.noteService.deleteRequest('note/deletenote?id='+items.id).subscribe
//   ((response:any)=>{
//     if(response.statuscode===600){
//       console.log(response);
//       this.snackbar.open("note deleted","undo",{duration:2500})
//     }
//     else{
//       console.log(response);
//       this.snackbar.open("note is not deleted","undo",{duration:2500})
//     }
   
//   });
// }


}
