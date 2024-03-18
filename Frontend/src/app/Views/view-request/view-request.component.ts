import { Component } from '@angular/core';

export interface UserData {
  Product_name: string;
  Request_description: string;
  Prescription_file: string;
}

const ELEMENT_DATA: UserData[] = [
 {Product_name: 'Shampoin luxor' ,Request_description: 'je nécessite ce shampoin avant le 15/03/2023',Prescription_file:'not downloaded yet'},
 {Product_name: 'TRANSPORTEUR ' ,Request_description: 'c urgent, transporteur pour adulte',Prescription_file:'not downloaded yet'},
 {Product_name: 'Shampoin luxor' ,Request_description: 'je nécessite ce shampoin avant le 15/03/2023',Prescription_file:'not downloaded yet'},
 {Product_name: 'Shampoin luxor' ,Request_description: 'je nécessite ce shampoin avant le 15/03/2023',Prescription_file:'not downloaded yet'}

];

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent {
  displayedColumns: string[] = ['Product_name', 'Request_description', 'Prescription_file'];
  dataSource = ELEMENT_DATA;
}
