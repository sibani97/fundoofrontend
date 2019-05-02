import { Component, OnInit } from '@angular/core';
import { Resetpassword } from 'src/app/model/resetpassword';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPassword:Resetpassword = new Resetpassword();
  regsetForm: FormGroup;
  constructor(private snackBar: MatSnackBar,private httpservice:HttpService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regsetForm = this.formBuilder.group(
      {
       
        'newpassword':new FormControl(this.resetPassword.newpassword,[Validators.required,Validators.minLength(6)]),
        'confirmPassword':new FormControl(this.resetPassword.confirmPassword,[Validators.required,Validators.minLength(6)]),
       
      }
    )


  }

  onRegister(){
    console.log("Reset password");
    this.httpservice.postRequest("register",this.resetPassword).subscribe(
      (response:any) => {
        if(response.statusCode === 200){
          console.log(response);
          this.snackBar.open(
            "Reset password Successfully",
            "undo",
            {duration:2500}
          )
        }else{
          console.log(response);
          this.snackBar.open(
            "reset password Failed",
            "undo",
            {duration:2500}
          )
        }

      }
    )
  }

}
