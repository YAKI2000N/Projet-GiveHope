import { Component } from '@angular/core';
interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  show: boolean;
}
@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent {
   products = [
    {
      name: 'PACLITAX',
      image: '/assets/1.jpg',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020',
      showDescription: false
    },
    {
      name: 'KEYTRUDA (50ml)',
      image: '/assets/2.jpg',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'RUKINSA',
      image: '/assets/3.jfif',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'RbRUKINSA',
      image: '/assets/4.jpg',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'DOCETAXEL',
      image: '/assets/5.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    },
    {
      name: 'KEYTRUDA (100ml)',
      image: '/assets/6.png',
      shortDescription: 'ce produit est adaptable à la maladie x et peut etre pris avec la dose y',
      longDescription: 'contact : 250360020, prix : 20dt',
      showDescription: false
    }
    


  ];

  toggleDescription(product: any) {
    product.showDescription = !product.showDescription;
  }
  
  }


