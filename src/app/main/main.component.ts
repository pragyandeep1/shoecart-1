import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [CommonModule,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    searchText:string=''
    text:string=''
    count=0
    addedToCart:any=[]
    

    addToCart(index:any){
      this.addedToCart.push(this.products[index])
      this.count++;
      console.log(this.addedToCart)
    }

    searchButton(){
      this.text=this.searchText;
    }

    products=[
      {
        id:1,
        image:'https://neemans.com/cdn/shop/files/ND-SoleMaxSlipOn-UltraBlack-_WebOptimized_d_200x.jpg?v=1724988371',
        name:'Sole Max Slip Ons : Ultra Black',
        price:'Rs. 1,499',
        aprice:'Rs. 2,999',
        inStock:true
      },
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Black_2_9f67a6a3-c77f-45ca-9842-a92b5557781f_200x.jpg?v=1733920926',
        name:'Crossover Brogues : Black',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:false
      },

      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND-TUBR-Beige_WebOptimized_b_200x.jpg?v=1735813678',
        name:'The Urban Riffs : White',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:true
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:false
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:false
      },

      
      {
        image:'https://neemans.com/cdn/shop/files/ND_-_CRB_-_Tan_2_b18f0573-47df-4880-a330-1d02881b61d6_200x.jpg?v=1724987729',
        name:'Crossover Brogues : Tan',
        price:'Rs. 1,499',
         aprice:'Rs. 2,999',
         inStock:false
      }
    ]
}
