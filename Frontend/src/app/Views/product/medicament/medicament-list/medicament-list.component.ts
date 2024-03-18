  import { Component } from '@angular/core';
  import { CrudService } from 'src/app/service/crud.service';

  @Component({
    selector: 'app-medicament-list',
    templateUrl: './medicament-list.component.html',
    styleUrls: ['./medicament-list.component.scss']
  })
  export class MedicamentListComponent {
    imageSrc!: string;
  imageLoaded : boolean = false;

    Medicaments:any = [];


    constructor( private crudService: CrudService

    ){

    }
    ngOnInit(): void {

      this.crudService.getMedicaments().subscribe(res => {

        this.Medicaments = res ;
        var filename = this.Medicaments[0].photo ;
      
      console.log(filename)
      
      this.crudService.getImage(filename).subscribe(blob=>{
       
        this.imageSrc = URL.createObjectURL(blob);
        this.imageLoaded = true ;
      })

      })
      


    }

    delete(id:any,i:any){
      console.log(id);
      this.crudService.deleteMedicament(id).subscribe(res => {
        this.Medicaments.splice(i,1); 

      })
    }
  }
