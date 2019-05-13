import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { AddtonoteComponent } from './component/addtonote/addtonote.component';
import { NoteComponent } from './component/note/note.component';
import { IspinComponent } from './component/ispin/ispin.component';
import { AppIconComponent } from './component/app-icon/app-icon.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard' , component: DashBoardComponent},
  {path:'addtonote' ,component:AddtonoteComponent},
  {path:'getnote',component:NoteComponent},
  {path:'isPin',component:IspinComponent},
  {path:'app-icon',component:AppIconComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
