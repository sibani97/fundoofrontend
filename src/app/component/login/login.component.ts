import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
   loginForm: FormGroup;
  constructor(private snackBar: MatSnackBar,private httpservice:HttpService,public formBuilder: FormBuilder) { }

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
    this.httpservice.postRequest("login",this.login).subscribe(
      (response:any) => {
        if(response.statusCode ===-100){
          console.log(response);
          this.snackBar.open(
            "Login Successfully",
            "undo",
            {duration:2500}
          )
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
