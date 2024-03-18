import { Component } from '@angular/core';
interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  show: boolean;
}
@Component({
  selector: 'app-medical-supplies',
  templateUrl: './medical-supplies.component.html',
  styleUrls: ['./medical-supplies.component.scss']
})
export class MedicalSuppliesComponent {
  products = [
    {
      name: 'PACLITAX',
      image: '/assets/medical/1.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020',
      showDescription: false
    },
    {
      name: 'KEYTRUDA (50ml)',
      image: '/assets/medical/2.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'RUKINSA',
      image: '/assets/medical/3.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'RbRUKINSA',
      image: '/assets/medical/4.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'DOCETAXEL',
      image: '/assets/medical/5.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'KEYTRUDA (100ml)',
      image: '/assets/medical/6.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    }
    


  ];

  toggleDescription(product: any) {
    product.showDescription = !product.showDescription;
  }
}
