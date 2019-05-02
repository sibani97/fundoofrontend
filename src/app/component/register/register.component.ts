import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registerForm: FormGroup;

  constructor(private snackBar: MatSnackBar,private httpservice:HttpService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        'userName':new FormControl(this.user.userName,[Validators.required]),
        'emailId':new FormControl(this.user.emailId,Validators.required),
        'password':new FormControl(this.user.password,[Validators.required,Validators.minLength(6)]),
        'mobileNumber':new FormControl(this.user.mobileNumber,[Validators.required])
      }
    )

  }

  onRegister(){
    console.log("Registration");
    this.httpservice.postRequest("register",this.user).subscribe(
      (response:any) => {
        if(response.statusCode === 100){
          console.log(response);
          this.snackBar.open(
            "Registered Successfully",
            "undo",
            {duration:2500}
          )
        }else{
          console.log(response);
          this.snackBar.open(
            "Registration Failed",
            "undo",
            {duration:2500}
          )
        }

      }
    )
  }

}
