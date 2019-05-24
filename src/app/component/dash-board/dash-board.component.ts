import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Login } from "./../../model/login";
import { Router } from "@angular/router";
import { LabelComponent } from '../label/label.component';
import { MatDialog } from '@angular/material';
import { LabelService } from 'src/app/service/label-service';

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
   ,private labelService:LabelService ) {
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


 
 


}