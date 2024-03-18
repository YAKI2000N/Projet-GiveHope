import { Component, OnInit } from '@angular/core';

declare var window:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formModal : any;
  formModal1 : any;
  ngOnInit(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModalToggle2")
    );
    this.formModal1 = new window.bootstrap.Modal(
      document.getElementById("exampleModalToggle")
    );

  }
openModal(){
  this.formModal.show();

}
openModal1(){
  this.formModal1.show();

}
hideModal(){
  this.formModal.hide();
}
hideModal1(){
  this.formModal1.hide();
}

}