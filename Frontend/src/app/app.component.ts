import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './service/crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project-ZC';

  isLoggedIn = false ;
  constructor( private router: Router , public crudService: CrudService){}
  ngOnInit(){

    const token= localStorage.getItem('token');
    if (token) {
     this.isLoggedIn = true ;
    }
  }


  toAbout(){
    const aboutSection = document.getElementById("about-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }

  }
  toProduct(){
    const aboutSection = document.getElementById("products");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }

  }
  toContact(){
    const aboutSection = document.getElementById("contact-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }



  }




  logout(){
    localStorage.removeItem('token');
    this.isLoggedIn=false ;
    this.router.navigate(['/']);
  }

  
  }



