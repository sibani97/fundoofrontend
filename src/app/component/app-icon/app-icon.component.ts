import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {

  @Input() 
  noteData: any;

  notes: any[];
  unpinned: any[];
  data: any[];
  untrash:any;
  unarchive:any;

  constructor(private noteService: NoteService, private snackbar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
    // console.log('NOTEDATA ', this.noteData);
    console.log('in app icon ts', this.noteData);
    this.getUnPinned();
    this.getUnArchive();
    // this.getUnTrash();

  }

  trash() {
    console.log("trash note");
    console.log(this.noteData);
    console.log(this.noteData.noteId);
    this.noteService.putRequest("note/trash?noteId=" + this.noteData.noteId, null).subscribe
      ((response: any) => {
        if (response.statusCode === 300)
          this.snackbar.open("note trashed", "undo", { duration: 2500 });
      }
      );
  }

  openDialog(items): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px', height: '230px',
      data: {
        title: items.title,
        description: items.description,
        noteId: items.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

  getUnPinned() {
    this.noteService.getRequest('note/getUnPin').subscribe(
      (response: any) => {
        this.unpinned = response;
        
      }
    )


    }


    // getUnTrash()
    // {
    //   this.noteService.getRequest('note/getUntrash').subscribe(
    //     (response: any) => {
    //       this.unpinned = response;
          
    //     }
    //   )
    // }

    getUnArchive()
    {
      this.noteService.getRequest('note/getUnarchive').subscribe(
        (response: any) => {
          this.unarchive = response;
          
        }
      )

    }
    archive() {
      console.log("archive note");
      this.noteService.putRequest("note/isArchive?noteId=" + this.noteData.noteId, null).subscribe(
        (response: any) => {
          if (response.statusCode === 507)
            this.snackbar.open("note archive", "undo", { duration: 2500 });
        }
  
      );
    }

   restore(items)
   {
  console.log("note restore");
  console.log("Restore"+items.id);
  this.noteService.putRequest('note/trash?id='+items.id,'').subscribe
  ((response:any)=>{
    if(response.statuscode===100){
      console.log(response);
      this.snackbar.open("note restore","undo",{duration:2500})
    }
    else{
      console.log(response);
      this.snackbar.open("note not restore","undo",{duration:2500})
    }
  }
);

}




}
