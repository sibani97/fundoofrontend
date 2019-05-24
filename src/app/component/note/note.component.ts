import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { NoteService } from 'src/app/service/note-service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  note: any[];
  data: any[];
  // noteService:NoteService=new NoteService();

  constructor(private httpservice: HttpService, private snackBar: MatSnackBar, private noteService: NoteService, private dialog: MatDialog) { }


  ngOnInit() {

    console.log("get all unpinned notes");
    this.noteService.getRequest('note/getUnPin').subscribe
      ((response: any) => {
        this.note = response,
          console.log("#######", response)
      })


  }

  openDialog(items: any): void {
    const dialogRef = this.dialog.open(DialogComponent,
      {
        width: '350px',
        height: '300px',
        data: {
          title: items.title,
          description: items.description,
          noteId: items.noteId
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog box closed');

    })
  }

  isPin(items)
  {
    console.log("pin note");
    this.noteService.putRequest("note/isPin?noteId=" + items.noteId, null).subscribe
      ((response: any) => {
        if (response.statusCode === 500)
          this.snackBar.open("note pin", "undo", { duration: 2500 });

      }
      );
  }
}
