import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { LabelService } from 'src/app/service/label-service';
import { FormControl } from '@angular/forms';
import { Label } from 'src/app/model/label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  // note:Note=new Note;
  // label:any;
  private popup:boolean;
  allLabels:any[];
  items:any;
  newlabel:any;
  labelName=new FormControl('');
  labelId:any;
  userId:any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private noteService:NoteService,private snackbar:MatSnackBar,private dialog: MatDialog, public dialogRef: MatDialogRef<LabelComponent>,private labelService:LabelService) { }

  ngOnInit() {
    this.getLabel();
  }
  onPopUp()
  {
    this.popup=true;
  }


  getLabel()
  {
    console.log("get all labels");
    this.noteService.getRequest("label/getall/user/label").subscribe
      ((response: any) => {
        this.allLabels = response;
          console.log(this.allLabels);
          
      });


  }

  


  addLabel()
  {
    this.items = {
      "labelName": this.labelName.value
    };
    console.log("label create");
    this.noteService.postRequest("label/create",this.items).subscribe
    ((response:any)=>{
      if(response.statusCode===400){
        console.log(response);
        this.snackbar.open("label created","undo",{duration:2500})
      }
      else{
        console.log(response);
        this.snackbar.open("label is not created","undo",{duration:2500})
      }

    }
    );

    
  }

  deleteLabelToNote(items)
  {
    console.log("delete label");

    this.newlabel = {
     
      "labelId":items.labelId,
      "userId":items.userId
    };
    this.labelService.deleteRequest("label/delete?labelId="+items.labelId)
    
    .subscribe((response:any)=>
    {
      if(response.statusCode===300){
        console.log(response);
        console.log("note id"+items.noteId);
        this.snackbar.open("label is deleted from note","undo",{duration:2500})
      }
      else
      {
        console.log(response);
        this.snackbar.open("label is not deleted from note","undo",{duration:2500})
      }
    });
  
  
}
editLabel(items)
{
  console.log(items);
  console.log(this.labelName.value);
  this.newlabel = {
    "labelName": this.labelName.value,
    "labelId":items.labelId,
    "userId":items.userId
  };
  console.log(items);
  this.labelService.putRequest("label/update",this.newlabel).subscribe(
    (response: any) => {
      if (response.statusCode ===700) {
        this.snackbar.open("Label updated", "", { duration: 2500 });
      } else {
        this.snackbar.open("Label updation failed", "", { duration: 2500 });
      }
    }
  );
 
 
}
}
