import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
   loginForm: FormGroup;
   token:string;
  constructor(private snackBar: MatSnackBar,private httpservice:HttpService,public formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        
        'emailId':new FormControl(this.login.emailId,Validators.required),
        'password':new FormControl(this.login.password,[Validators.required,Validators.minLength(6)])
        
      }
    )

  }

  onLogin(){

    console.log("Login");
    
    console.log(this.login.emailId)
    this.token=localStorage.getItem('token');
    this.httpservice.postRequest("login",this.login).subscribe(
      (response:any) => {
        if(response.statusCode ===200){
          console.log(response);
          console.log(response.token);
          localStorage.setItem('token',response.token);
          localStorage.setItem('email',this.login.emailId);
          this.snackBar.open(
            "Login Successfully",
            "undo",
            {duration:2500}
          )
          this.router.navigate(['/dashboard']);
        }else{
          console.log(response);
          this.snackBar.open(
            "Login Failed",
            "undo",
            {duration:2500}
          )
        }

      }
    )
  }

}
