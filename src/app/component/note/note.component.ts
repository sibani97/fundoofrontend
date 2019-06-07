import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { NoteService } from 'src/app/service/note-service';
import { DialogComponent } from '../dialog/dialog.component';
import { LabelService } from 'src/app/service/label-service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  note: any[];
  data: any[];
  arrayOfColors= [
    [
    { colorName: "LightCoral", colorCode: "#F08080" },
    { colorName: "Red", colorCode: "#FF0000" },
    { colorName: "Crimson", colorCode: "#DC143C" },
    { colorName: "FireBrick", colorCode: "#B22222" },
    ],
    [
    { colorName: "HotPink", colorCode: "#FF69B4" },
    { colorName: "DeepPink", colorCode: "#FF1493" },
    { colorName: "PaleVioletRed", colorCode: "#DB7093" },
    { colorName: "dark blue", colorCode: "#0000A0" },
    ],
    [
    { colorName: "Coral", colorCode: "#FF7F50" },
    { colorName: "OrangeRed", colorCode: "#FF4500" },
    { colorName: "Tomato", colorCode: "#FF6347" },
    { colorName: "Yellow", colorCode: "#FFFF00" },
    ]
    
    ];
  // noteService:NoteService=new NoteService();

  constructor( private labelService:LabelService,
    private httpservice: HttpService, private snackBar: MatSnackBar, private noteService: NoteService, private dialog: MatDialog) { }


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

deleteLabelToNote(items,label)
{
  console.log("Delete from note");
  this.labelService.deleteRequest("label/delete/note/label?noteId="+ items.noteId+"&labelId="+label.labelId).subscribe
  ((response:any)=>{
    if(response.statusCode===300){
      console.log(response);
      this.snackBar.open("label deleted from note successfully","undo",{duration:2500});
    }
    else{
      console.log(response);
      this.snackBar.open("label is not deleted from note","undo",{duration:2500});
    }
  })
}

}
