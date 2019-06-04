import { Component, OnInit, Input, Inject } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Console } from '@angular/core/src/console';
import { DataService } from 'src/app/service/data-service';
import {  Collaborator} from "../../model/collaborator";

@Component({
  selector: 'app-collaborator-dialog',
  templateUrl: './collaborator-dialog.component.html',
  styleUrls: ['./collaborator-dialog.component.scss']
})
export class CollaboratorDialogComponent implements OnInit {
 
  
  collaborateName = new FormControl('');
  items: any;
  shareEmail = new FormControl();
  

// collaborator:Collaborator=new Collaborator();
  @Input() noteData: any;
  emailId:String;
  userName:String;
  allCollaboretos: any;
  message:any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dataService:DataService, 
  private noteService: NoteService, private snackbar: 
  MatSnackBar,
   public dialogRef: MatDialogRef<CollaboratorDialogComponent>) { }

  ngOnInit() {
    this.getCollaboratorsNote();
    this.dataService.recentMessage.subscribe((response:any)=>
    {this.message=response;
      this.getCollaboratorsNote();
    });
   this.userName=localStorage.getItem('userName');
   this.emailId=localStorage.getItem('emailId');
  }


  

  getCollaboratorsNote() {
    console.log("get all collaboretos from Note");
    console.log(this.data.noteId);
    // console.log(this.noteData.noteId);
    this.noteService.getRequest("note/getColaboratorNote?noteId=" + this.data.noteId).subscribe(
      (response: any) => {
      this.allCollaboretos = response;
      console.log("Note collab");
      console.log(this.allCollaboretos);
      }
    );
  }










 

  addCollaboretor()
  {

    console.log("collaborator is added")

    const items={
    "ShareEmail":this.shareEmail.value
    };

    console.log("emailId collaborated to note");
    console.log("emailid"+this.collaborateName.value);
    console.log("shareEmail"+items.ShareEmail);
    this.noteService.postRequest("note/addColaborator?noteId="+ this.data.noteId + "&emailId=" + this.collaborateName.value, "").
    subscribe((response:any)=>{
      if(response.statusCode===700)
      {
        console.log(response);
        // this.dataService.changeMessage(response.statusCode)
        this.snackbar.open("EmailId is collaborated successfully","undo",{duration:2500})
      }
      else{
        console.log(response);
        this.snackbar.open("EmailId is not collaborated","undo",{duration:2500})
      }
    }
   

    );
    
  
  }


  removeCollaborator(items){
  // {console.log(items.emailId)
    // console.log("collaborated note is deleted");
    console.log(this.data.noteId)
    console.log(items.emailId)
    this.noteService.deleteRequest("note/deleteColaborator?noteId=" + this.data.noteId+"&emailId="+items.emailId).subscribe
    ((response:any)=>{
      if(response.statusCode===700){
        console.log(response)
        this.snackbar.open("EmailId removed from collaborated list","undo",{duration:2500})
      }
      else{
console.log(response)
this.snackbar.open("EmailId is not removed from collaborated******* list","undo",{duration:2500})
      }
    });




  }













  

  // save() {
  //    this.addCollaboretor();
  //   this.dialogRef.close();
  // }



}