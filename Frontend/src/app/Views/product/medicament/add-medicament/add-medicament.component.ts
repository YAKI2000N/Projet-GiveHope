import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { saveAs } from 'file-saver';
import { Medicament } from 'src/app/service/Medicament';


@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.scss']
})
export class AddMedicamentComponent implements OnInit {




   eventForm!:FormGroup;
  shortLink: string = "";
    loading: boolean = false; 
  file: any;
  imageSrc : any ;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    public crudService: CrudService,
  ) {
    
  }

  ngOnInit(): void {

    this.eventForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      image: ""// initialize with empty string
    });

   
    
  }

  onSubmit() {
    console.log(this.eventForm.value)
    var formData = new FormData();
    formData.append("name",this.eventForm.get('name')?.value);
    console.log(this.eventForm.get('name')?.value)


    // formData.append('description', this.eventForm.get('description')?.value);
    formData.append('description', this.eventForm.value.description )
    formData.append('price', this.eventForm.get('price')?.value);
    console.log(formData)



   formData.append('image',this.eventForm.get('image')?.value,this.eventForm.get('image')?.value[0]);
   
   console.log(formData.getAll('image'));
   
  
    this.crudService.addMedicament(formData).subscribe(
      
      () => {
        
        this.ngZone.run(() => this.router.navigateByUrl('/medicament-list'));
      },
      (err) => {
        console.log(err);
        // add proper error handling code
      }
    );
  }

 //public imageChange(event:any ){

  //const file = (event.target as HTMLInputElement).files[0];
  //this.eventForm.patchValue({
    //imageSrc:file
  //})

  //this.eventForm.get('photo')?.updateValueAndValidity();
 //}

  public imageChange(event: Event): void {
const files = (event.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    const file = files[0];
    console.log(files[0].name)

    this.eventForm.patchValue({
      image: file
    });
    this.eventForm.get('image')?.updateValueAndValidity();
  }
}
}
