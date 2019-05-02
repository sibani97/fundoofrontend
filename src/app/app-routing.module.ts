import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './component/register/register.component';
import { AayuComponent } from './component/aayu/aayu.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: AayuComponent },
  { path: 'login', component: LoginComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'resetpassword' , component:ResetpasswordComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
