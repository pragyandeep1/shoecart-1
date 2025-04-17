import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  total:any=0
 

    addedProducts=[
        {
          id:1,
          image:'https://neemans.com/cdn/shop/files/ND-SoleMaxSlipOn-UltraBlack-_WebOptimized_d_200x.jpg?v=1724988371',
          name:'Sole Max Slip Ons : Ultra Black',
          price: 1499 ,
          aprice:'Rs. 2,999',
          inStock:true
        },
        {
          image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Black_2_9f67a6a3-c77f-45ca-9842-a92b5557781f_200x.jpg?v=1733920926',
          name:'Crossover Brogues : Black',
          price:1499,
           aprice:'Rs. 2,999',
           inStock:false
        }
    ]

    subTotal(){
      for(let i=0; i<=this.addedProducts.length;i++){
          this.total= this.total + this.addedProducts[i].price
      }

      console.log(this.total)
    }

    

    removeAll(){
        for(let i=0; i<=this.addedProducts.length;i++){
          this.addedProducts.pop()
        }
    }
}
