import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './component/register/register.component';
import { AayuComponent } from './component/aayu/aayu.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: AayuComponent },
  
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
