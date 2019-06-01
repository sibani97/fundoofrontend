import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { LabelService } from 'src/app/service/label-service';
import { FormControl } from '@angular/forms';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {
  
   allLabels:any[]; 
  items:any;
  labelOfNotes:any[];
  @Input() 
  noteData: any;
  // allLabels:any;
  notes: any[];
  unpinned: any[];
  data: any[];
  untrash:any;
  unarchive:any;
  labelName=new FormControl('');
 
  constructor(private noteService: NoteService, private snackbar: MatSnackBar,public dialog: MatDialog,private labelService:LabelService) { }

  ngOnInit() {
    // console.log('NOTEDATA ', this.noteData);
    console.log('in app icon ts', this.noteData);
    this.getUnPinned();
    this.getUnArchive();
    this.getallLabel();
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


    onEvent(event) {
      event.stopPropagation();
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


addLabelToNote(items)
{
  this.items={
    " labelName":this.labelName.value
  };
  console.log("##########",items);
  
  console.log("add label to note",items.labelName);
  console.log("note id",this.noteData.noteId);
   //label/add/label/note?noteId=58&labelTitle=mango%20tree
  this.labelService.postRequest("label/add/label/note?labelTitle="+items.labelName+ "&noteId="+this.noteData.noteId ,null).subscribe
  ((respose:any)=>
  {
    if(respose.statusCode===100){
      console.log(respose);
      this.snackbar.open("label is added to note","undo",{duration:2500})
    }
    else{
      console.log(respose);
      this.snackbar.open("label is not added to note","undo",{duration:2500})
    }

  });
}



getallLabel()
{
  console.log("add label to note");
  this.labelService.getRequest("label/getall/user/label").subscribe
  ((response:any)=>{
    this.allLabels=response;
    console.log(this.allLabels);
  })

}

deleteLabelToNote(items)
{
  console.log("Delete from note");
  this.labelService.deleteRequest("label/delete/note/label?noteId="+this.noteData.noteId+"&labelId="+items.labelId).subscribe
  ((response:any)=>{
    if(response.statusCode===300){
      console.log(response);
      this.snackbar.open("label deleted from note successfully","undo",{duration:2500});
    }
    else{
      console.log(response);
      this.snackbar.open("label is not deleted from note","undo",{duration:2500});
    }
  })
}


openDialoglabelCollaboretor(): void {
  const dialogRef = this.dialog.open(CollaboratorDialogComponent,
    {
      width: '400px',
      height: '350px',
      
    });

  dialogRef.afterClosed().subscribe(result => {
    console.log('dialog box closed');
 

  })

}



}
