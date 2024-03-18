import { Component, OnInit ,NgZone } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-medicament-detail',
  templateUrl: './medicament-detail.component.html',
  styleUrls: ['./medicament-detail.component.scss']
})
export class MedicamentDetailComponent  implements OnInit{
  getId:any;

  updateForm: FormGroup; 
  


  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private activateRoute : ActivatedRoute,
    private ngZone:NgZone,
    private crudService : CrudService,

  ){

    this.getId = this.activateRoute.snapshot.paramMap.get('id');
    this.crudService.getMedicament(this.getId).subscribe(res => {
      console.log(res)
      this.updateForm.setValue({ name:res['name'],

 description:res['description'], price:res['price']});



    });

    this.updateForm = this.formBuilder.group({ name:[''],
    description:[''],price:['']
    })
   

  }
  ngOnInit(): void {
  }

  onUpdate():any{
    this.crudService.updateMedicament(this.getId,this.updateForm.value)
    .subscribe(()=> {
      console.log('Data updated successfully')
      this.ngZone.run(()=> this.router.navigateByUrl('/medicament-list'))
    },(err)=>{
      console.log(err)
    })

  }



}
