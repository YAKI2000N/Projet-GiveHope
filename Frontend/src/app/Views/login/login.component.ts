import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  data:any;
  token: any ;

  constructor(private crudService:CrudService , private toastr : ToastrService, private formBuilder : FormBuilder, private router:Router){
   
    
  }


 

  ngOnInit(): void {

   
    
    this.form = this.formBuilder.group(
      {
       
      
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            
          ]
        ],
     
      },
     
    );
  }

 // get f()  {
   // return this.form.controls;
  //}
    get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
   }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;


    }

    console.log(this.form.value)
  this.crudService.login(this.form.value).subscribe(res =>{
      console.log(res)
      this.data = res ;
      if (this.data.status===1){
        this.token = this.data.data.token ;
        localStorage.setItem('token',this.token);
        this.router.navigate(['/'])
        this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
          timeOut: 2000,
          progressBar: true 
        });

      }else if(this.data.status===0) {

        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
          timeOut: 2000,
          progressBar: true 
        });
      }

    })
  
  }



}
