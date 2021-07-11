import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Loginemployee } from './loginemployee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userMatch:boolean=false;
  message="";
  succ:Loginemployee[]=[];
  IsOk=false;
  error=false;
  constructor(private fb:FormBuilder,private empservice:EmployeeService,public router:Router) {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['', Validators.required]
    })
    
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    let employee = this.loginForm.value;

    this.empservice.login(employee).subscribe((user)=>{
      console.log(user);
      this.succ = user;
      this.IsOk=true;
      if(this.IsOk){
        console.log(this.succ);
        console.log("testing");
        // sessionStorage.setItem("user",JSON.stringify(this.succ));
        this.router.navigate(['admin']);
      }
    })
    if(!this.IsOk){
      console.log("hey");
      this.message="Your password is not matching";
      this.error=true;
      this.loginForm.reset();
    }
  }
      

}
