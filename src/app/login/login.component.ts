import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){
  
  }
  
    ngOnInit(): void {
     this.loginForm=this.formBuilder.group({
      emailId:['',Validators.required],
       password:['',Validators.required]
     })
    }
    login(){
        this.http.get<any>("http://localhost:9093/customers")
      .subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.emailId === this.loginForm.value.emailId && a.password === this.loginForm.value.password
        });
        if(user){
          console.log("login Successful")
          this.loginForm.reset();
          this.router.navigate(['/products'])
        }else{
          alert("EmailId or Password is wrong");
          console.log("EmailId or Password is wrong")
        }
   
      },err=>{
        alert("Somthing went wrong!!!!")
      })
  }
  }
