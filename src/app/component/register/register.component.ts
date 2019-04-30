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
        'name':new FormControl(this.user.name,[Validators.required]),
        'email':new FormControl(this.user.emailId,Validators.required),
        'password':new FormControl(this.user.password,[Validators.required,Validators.minLength(6)]),
        'mobileNumber':new FormControl(this.user.phNumber,[Validators.required])
      }
    )

  }

  onRegister(){
    console.log("Registration");
    this.httpservice.postRequest("register",this.user).subscribe(
      (response:any) => {
        if(response.statusCode === 1){
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
