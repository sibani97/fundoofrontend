import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './component/login/login.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { AddtonoteComponent } from './component/addtonote/addtonote.component';
import { NoteComponent } from './component/note/note.component';
import { IspinComponent } from './component/ispin/ispin.component';
import { AppIconComponent } from './component/app-icon/app-icon.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { GetTrashComponent } from './component/get-trash/get-trash.component';
import { TrashComponent } from './component/trash/trash.component';
import { NoteparentComponent } from './component/noteparent/noteparent.component';
import { RegisterComponent } from './component/register/register.component';
import { UnArchiveComponent } from './component/un-archive/un-archive.component';
import { LabelComponent } from './component/label/label.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';
import { CollaboratorDialogComponent } from './component/collaborator-dialog/collaborator-dialog.component';
import { ReminderComponent } from './component/reminder/reminder.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'isPin', component: IspinComponent },
 


  {path: 'dashboard', component: DashBoardComponent, 
    children: [
      {path:'',redirectTo:'note',pathMatch:'full'},
      {path:'note',component:NoteparentComponent},
      { path: 'dialog', component: DialogComponent },
      { path: 'addtonote', component: AddtonoteComponent },
      { path: 'getnote', component: NoteComponent },
      {path:'getArchive', component: UnArchiveComponent},
      { path: 'app-icon', component: AppIconComponent },
       {path:'trash',component:GetTrashComponent},
       {path:'trashdata',component:TrashComponent},
       {path:'unarchive',component:UnArchiveComponent},
       {path:'label',component:LabelComponent},
       {path:'profilepic',component:ProfilePicComponent},
      {path:'collaborator',component:CollaboratorDialogComponent},
      {path:'reminder',component:ReminderComponent}
    ],
  }
]
@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
