import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {EmailService} from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nodeMailerForm :FormGroup;
  constructor(private emailService:EmailService , private formBuilder:FormBuilder ){
    
  }

  ngOnInit(){
    this.nodeMailerForm = this.formBuilder.group({
       email:[null,[Validators.required]]
    });
  }

  sendMail(){
    alert("check your email");
    let email  = this.nodeMailerForm.value.email;
    let reqObj = {
      email:email
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
  }
}