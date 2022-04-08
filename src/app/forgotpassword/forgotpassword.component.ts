import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

 
  public resetForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    
    })
  }
  reset(){
    this.http.put<any>("http://localhost:9093/updates",this.resetForm.value)
    .subscribe(res=>{
      console.log("password changed")
      this.resetForm.reset();
      this.router.navigate(['/login']);
    },err=>{
      alert("give valid email")

    })

  }

}