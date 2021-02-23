import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Security } from 'src/app/utils/security.utils';
import { CustomValidator } from 'src/app/validators/custom.validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  
  constructor(private service: DataService, private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      username: [
        "", Validators.compose([
          Validators.maxLength(14), Validators.minLength(14), Validators.required, CustomValidator.isCpf()
        ])
      ],
      password: [
        "", Validators.compose([
          Validators.maxLength(20), Validators.minLength(6), Validators.required
        ])
      ]
    });   }

  ngOnInit() {
    const token = Security.getToken();
    if(token){
      this.busy = true;
      this.service
      .refreshToken()
      .subscribe(
        (data: any)=>{
          this.busy = false;
          this.setUSer(data.customer, data.token);
        },
        (error)=>{
          localStorage.clear();
          this.busy = false;
        }
      )
    }
  }

  submit(){
    this.busy = true;
    this.service.authenticate(this.form.value)
    .subscribe(
      (data: any)=>{
        this.setUSer(data.customer, data.token);
        this.busy = false;
      },
      (error)=>{
        this.busy = false;

      }
    )
  }


  setUSer(user, token){
    Security.set(user, token);
    this.router.navigate(["/"])
  }
}
