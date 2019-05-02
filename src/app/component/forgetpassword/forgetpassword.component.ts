import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  emailId:string;
  constructor(private snackBar: MatSnackBar,private httpservice:HttpService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group(
      {
        'emailId':new FormControl(this.emailId,[Validators.required])

        
       
        
      }
    )

  }
  forgetPassword()
  {
    console.log("Forget Password");
    this.httpservice.postRequest("forgetpassword",this.emailId).subscribe(
      (response:any) => {
        if(response.statusCode ===200){
          console.log(response);
          this.snackBar.open(
            "forget password",
            "undo",
            {duration:2500}
          )
        }else{
          console.log(response);
          this.snackBar.open(
            "Error in forget password",
            "undo",
            {duration:2500}
          )
        }

      }
    )
  }

}
