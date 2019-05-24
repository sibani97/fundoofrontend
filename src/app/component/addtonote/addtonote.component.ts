import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteService } from 'src/app/service/note-service';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-addtonote',
  templateUrl: './addtonote.component.html',
  styleUrls: ['./addtonote.component.scss']
})
export class AddtonoteComponent implements OnInit {
  private popup:boolean;
 note:Note=new Note();
 //baseUrl=environment.baseUrl;
//  title:string;
//  description:String;
 constructor(private snackbar:MatSnackBar,private noteService:NoteService,private dialog: MatDialog)
 {

 }

 

    
  ngOnInit() {
    // this.title=this.note.title;
    // this.description=this.note.description;

  }
  onPopup()
  {
    this.popup=true;
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
  onClose()
  {
    console.log("note created");
  
      this.noteService.postRequest("note/createNote",this.note).subscribe(
        (response:any)=>{
          if(response.statusCode===200){
            console.log(response);
            this.snackbar.open("successfully note is created","undo",{duration:2500})

          }
          else{
            console.log(response);
            this.snackbar.open("note create failed","undo",{duration:2500})
          }

        }
      )
      this.popup=false;
    }
  }

  
  

