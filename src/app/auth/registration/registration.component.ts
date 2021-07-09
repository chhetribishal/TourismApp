import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() match= new EventEmitter();

  regForm:FormGroup;
  datasaved=false;
  message:string="";
  Matcher:boolean=true;


  constructor(private frmbuilder: FormBuilder,private empservice:EmployeeService) {
    this.regForm = this.frmbuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rptPassword: ['', Validators.required]

    });
  }
    
  ngOnInit(): void {
  }
  onSubmit(Form:FormGroup){
    let employee= Form.value;
   this.registerUser(employee);


    this.regForm.reset();
  }
  registerUser(employee: any){
    console.log(employee);
    this.empservice.register(employee).subscribe(()=>{

    });
      this.datasaved=true;
      this.message="You have registered successfully with us!";
      this.regForm.reset();
      
    

  }

  passwordMatch()
  {
    if(this.regForm.controls.password.value==this.regForm.controls.rptPassword.value){
      this.Matcher=true;
  }        
  else{
    this.Matcher=false;
  }                                                     
 
console.log(this.Matcher);
  }

 
}
