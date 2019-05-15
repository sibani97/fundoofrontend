import { Component, OnInit, Inject, Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/service/note-service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() noteData :any;
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteService, private snackbar: MatSnackBar) { }
  note: any;
  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  noteId = this.data.noteId;
  
  ngOnInit() {

  }
  updateNotes() {
    this.note = {
      "title": this.title.value,
      "description": this.description.value,
      
    }
    console.log("noteId#######",this.noteId);
    console.log(this.title);
    console.log(this.description)
    this.noteService.putRequest("note/update?noteId=" + this.noteId, this.note).subscribe(
      (response: any) => {
        if (response.statuscode ===200) {
          console.log(response);
          this.snackbar.open("note updated sucessfully", "undo", { duration: 2500 });
        }
        else {
          console.log(response);
          this.snackbar.open("note is updated", "undo", { duration: 2500 });
        }
      }

    )

  }


}
