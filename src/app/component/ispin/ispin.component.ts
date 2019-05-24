import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Note } from 'src/app/model/note';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-ispin',
  templateUrl: './ispin.component.html',
  styleUrls: ['./ispin.component.scss']
})
export class IspinComponent implements OnInit {
 note:any[];
  @Input() noteData: any;
  constructor(private noteService:NoteService,private snackbar:MatSnackBar,
    private dialog:MatDialog) { }

  ngOnInit() {
    
    console.log("get all pin note");
    this.noteService.getRequest('note/getPin?trash=false&archive=false').subscribe
      ((response: any) => {
        this.note = response,
          console.log("######hiii #", response)
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
    console.log("pin note",);
    this.noteService.putRequest("note/isPin?noteId=" + items.noteId, null).subscribe
      ((response: any) => {
        if (response.statusCode === 500)
          this.snackbar.open("note pin", "undo", { duration: 2500 });

      }
      );
  }

}
