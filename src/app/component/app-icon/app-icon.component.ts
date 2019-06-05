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
  
  @Input() noteData: any;

  // allLabels:any;
  notes: any[];
  unpinned: any[];
  data: any[];
  untrash:any;
  unarchive:any;
  labelName=new FormControl('');
  addColour=new FormControl('');
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
    ],
    [
      { colorName: "Violet", colorCode: "#EE82EE" },
      { colorName: "Fuchsia", colorCode: "#FF00FF" },
      { colorName: "BlueViolet", colorCode: "#8A2BE2" },
      { colorName: "DarkViolet", colorCode: "#9400D3" },
      ],
      [
        { colorName: "Purple", colorCode: "#800080" },
        { colorName: "MediumSlateBlue", colorCode: "#7B68EE" },
        { colorName: "GreenYellow", colorCode: "#ADFF2F" },
        { colorName: "Lime", colorCode: "#00FF00" },
        ],
        [
          { colorName: "MediumSpringGreen", colorCode: "#00FA9A" },
          { colorName: "MediumSlateBlue", colorCode: "#7B68EE" },
          { colorName: "Olive", colorCode: "#808000" },
          { colorName: "LightSeaGreen", colorCode: "#20B2AA" },
          ],
          [
            { colorName: "Aqua", colorCode: "#00FFFF" },
            { colorName: "DeepSkyBlue", colorCode: "#00BFFF" },
            { colorName: "DodgerBlue", colorCode: "#1E90FF" },
            { colorName: "CornflowerBlue", colorCode: "#6495ED" },
            ] ,
            [
              { colorName: "Brown", colorCode: "#A52A2A" },
              { colorName: "RosyBrown", colorCode: "#BC8F8F" },
              { colorName: "DarkSlateGray", colorCode: "#2F4F4F" },
              { colorName: "Khaki", colorCode: "#F0E68C" },
              ]  
    ];
  constructor(private noteService: NoteService, private snackbar: MatSnackBar,public dialog: MatDialog,private labelService:LabelService) { }

  ngOnInit() {
console.log("Collaborator"+this.noteData.noteId);
    console.log("Note is got"+this.noteData)
    // console.log('NOTEDATA ', this.noteData);
    console.log('in app icon ts', this.noteData);
    this.getUnPinned();
    this.getUnArchive();
    this.getallLabel();
    console.log("Colors",this.arrayOfColors);
    // this.getUnTrash();

  }
//   openDialoglabelCollaboretor(){
// console.log("Data is got"+this.noteData.noteId)
//   }
  

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

   openDialogCollaboretor(){
     console.log("Collaborator is set")
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


openDialoglabelCollaboretor(items): void 
{ console.log("*******"+items);
  const dialogRef = this.dialog.open(CollaboratorDialogComponent,
    {
      width: '400px',
      height: '350px',
      data:{
        noteId:this.noteData.noteId
        // noteId:this.items.noteId
      }
    });

  dialogRef.afterClosed().subscribe(result => {
    console.log('dialog box closed');
   })

}


addColourToNote(items)
{
  this.items={
"addColor":this.addColour.value
 };
console.log("colour ssuccessfully set")
this.noteService.postRequest("/note/addColor?noteId="+this.noteData.noteId+"&colour"+items.addColor,null)
.subscribe((response:any)=>{
if(response.statusCode===200){
console.log(response);
this.snackbar.open("colour is successfully added","undo",{duration:2500});
  }
  else{
    console.log("colour is not added");
    this.snackbar.open("colour is not added","undo",{duration:2500});
    // this.snackbar.open()
  }
});
}



}
