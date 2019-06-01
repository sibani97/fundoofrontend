import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Login } from "./../../model/login";
import { Router } from "@angular/router";
import { LabelComponent } from '../label/label.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LabelService } from 'src/app/service/label-service';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { HttpService } from 'src/app/service/http-service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  allLabels:any[];
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  
  private _mobileQueryListener: () => void;
  login:Login=new Login();
  email:string;
  token:string;
  items:any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private dialog:MatDialog
   ,private labelService:LabelService,private httpService:HttpService,private snackbar:MatSnackBar ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.token=localStorage.getItem('token');
    this.email=localStorage.getItem('email')
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  ngOnInit() {
   this.getallLabel();
  }
  onlogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  openDialoglabel(): void {
    const dialogRef = this.dialog.open(LabelComponent,
      {
        width: '400px',
        height: '350px',
        
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog box closed');
   

    })
 
}

getallLabel()
{
console.log("get all label");
this.labelService.getRequest("label/getall/user/label").subscribe
((response:any)=>
{
  this.allLabels=response;
  console.log(this.allLabels);
})
}

openProfileDialog()
{
  console.log("$$$$$$$$$");

  const dialogRef=this.dialog.open(ProfilePicComponent,
    {

      // width: '400px',
      // height: '350px',

      width : 'auto',
      height : 'auto'
      
    });
    
    dialogRef.afterClosed().subscribe(
      image=>{
        console.log('image',image.file);
      
      if(image!=null)
      {
        this.httpService.uploadImage("uploadProfilepic",image.file).subscribe
        ((response:any)=>{
          console.log("shibani profile########");
          
          if(response.statuscode===400){
            console.log(response);
            this.snackbar.open("profile pic uploaded successfully","close",{duration:2500});
            
          }
          else{
            console.log(response);
            this.snackbar.open("profile pic is not uploaded successfully","close",{duration:2500});
          }

        })
      }
    });
 
  }


}