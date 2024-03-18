 /*import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
@Component({
  selector: 'app-sign_up',
  templateUrl: './sign_up.component.html',
  styleUrls: ['./sign_up.component.scss']
})
export class Sign_upComponent implements OnInit{


  form:FormGroup;
  submitted=false;


  constructor(private formBuilder : FormBuilder){

    this.form =this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',Validators.required]
  },{
   validator:ConfirmedValidator('password','confirmPassword')
  })
  }

  createForm(){
    this.form =this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',Validators.required]
  })}

  ngOnInit():void{

    this.createForm();

  }

  get f(): {[key: string ]: AbstractControl}{
    return this.form.controls ;
  }
  submit(){
    this.submitted = true ;
    if (this.form.invalid){
      return;
    }

  }
  

}

*/
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import Validation from '../../confirmed.validator';
@Component({
  selector: 'app-sign_up',
  templateUrl: './sign_up.component.html',
  styleUrls: ['./sign_up.component.scss']
})

export class Sign_upComponent implements OnInit{

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  submitted = false;
  data:any;

  constructor(private formBuilder: FormBuilder,private crudService :CrudService, private toastr:ToastrService, private router:Router) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;


    }
 this.crudService.registerUser(this.form.value).subscribe(res => {


      this.data= res ;
      console.log(res);
    if (this.data.status===1){
      this.router.navigate(['/login'])

      
      this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
        timeOut: 2000,
        progressBar: true, 


        
      });
    }else{
      this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code), {
        timeOut:2000,
        progressBar:true 
      })
    }

    })
   

    console.log(JSON.stringify(this.form.value, null, 1));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
      
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  
}

