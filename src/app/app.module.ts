
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterComponent } from './component/register/register.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './material';


import { from } from 'rxjs';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { AddtonoteComponent } from './component/addtonote/addtonote.component';
import { NoteComponent } from './component/note/note.component';

import { AppIconComponent } from './component/app-icon/app-icon.component';
import { IspinComponent } from './component/ispin/ispin.component';
import { DialogComponent } from './component/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GetTrashComponent } from './component/get-trash/get-trash.component';
import { TrashComponent } from './component/trash/trash.component';
import { NoteparentComponent } from './component/noteparent/noteparent.component';
import { UnArchiveComponent } from './component/un-archive/un-archive.component';
import { LabelComponent } from './component/label/label.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
    DashBoardComponent,
    AddtonoteComponent,
    NoteComponent,
   
    AppIconComponent,
   
    IspinComponent,
   
    DialogComponent,
   
    GetTrashComponent,
   
    TrashComponent,
   
    NoteparentComponent,
   
    UnArchiveComponent,
   
    LabelComponent,
   
    ProfilePicComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
