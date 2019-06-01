import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note-service';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collaborator-dialog',
  templateUrl: './collaborator-dialog.component.html',
  styleUrls: ['./collaborator-dialog.component.scss']
})
export class CollaboratorDialogComponent implements OnInit {
  emailId:any;
  collaborateName=new FormControl('');
  items:any;
@Input() 
noteData: any;
allCollaboretos:any[];
  constructor(private noteService:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.collaborateName.value
  }

getCollaboratorsNote()
{
console.log("get all collaboretos from Note");
this.noteService.getRequest("note/getColaboratorNote?noteId="+this.items.noteId).subscribe(
  (response:any)=>{
   
  this.allCollaboretos=response;
  console.log(this.allCollaboretos);
  }
);
}







addCollaboretor()
{
  this.items={
    " collaborateName":this.collaborateName.value
  };
  console.log("add collaborate to note");
  this.noteService.putRequest("note/addColaborator?noteId="+this.noteData.noteId + "&emailId=" + this.items.emailId,"").subscribe
  ((response:any)=>{
    if(response.statusCode===700){
      console.log(response);
      this.snackbar.open("Emailid collaborated successfully","undo",{duration:2500})
    }
    else
    {
      console.log(response);
      this.snackbar.open("EmailId not collaborated successfully","undo",{duration:2500});
      
    }
  });

}

removeCollaboretor()
{

}


}
