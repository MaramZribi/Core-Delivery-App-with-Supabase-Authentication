import { Component, OnInit } from '@angular/core';

interface SizeOption {
  name: string;
  price: string;
}
@Component({
  selector: 'app-dos-amigos',
  templateUrl: './dos-amigos.component.html',
  styleUrls: ['./dos-amigos.component.css']
})
export class DosAmigosComponent {
  /*constructor(private api:ApiService,private cartService:CartService){}
  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
    })
  }
   addtocart(item:any){
    this.cartService.addtoCart(item);
   }*/
  Margherita: SizeOption[] = [
   { name: 'Small', price: '10 DT' },
    { name: 'Medium', price:'13 DT' },
    { name: 'Large', price: '15 DT' },
    { name: 'Maxi', price: '20 DT' },
  ];
 
   Formaggio: SizeOption[] = [
    { name: 'Small', price: '11 DT' },
     { name: 'Medium', price:'15 DT' },
     { name: 'Large', price: '18 DT' },
     { name: 'Maxi', price: '22 DT' },
   ];
   Chicken: SizeOption[] = [    { name: 'Small', price: '12 DT' },
     { name: 'Medium', price:'14 DT' },
     { name: 'Large', price: '17 DT' },
     { name: 'Maxi', price: '21 DT' },
   ];
   Pineapple: SizeOption[] = [
    { name: 'Small', price: '13 DT' },
     { name: 'Medium', price:'16 DT' },
     { name: 'Large', price: '20 DT' },
     { name: 'Maxi', price: '24 DT' },
   ];
   Meat: SizeOption[] = [
    { name: 'Small', price: '14 DT' },
     { name: 'Medium', price:'17 DT' },
     { name: 'Large', price: '20 DT' },
     { name: 'Maxi', price: '26 DT' },
   ];
 selectedSize: string = ''; // This will store the selected option from the dropdown
 getItemPrice1(sizeName: string): string {
  const selectedOption = this.Margherita.find((item) => item.name === sizeName);
  return selectedOption ? selectedOption.price :'0'; // Default to 0 if the item is not found
}
getItemPrice2(sizeName: string): string {
  const selectedOption = this.Formaggio.find((item) => item.name === sizeName);
  return selectedOption ? selectedOption.price :'0'; // Default to 0 if the item is not found
}
getItemPrice3(sizeName: string): string {
  const selectedOption = this.Chicken.find((item) => item.name === sizeName);
  return selectedOption ? selectedOption.price :'0'; // Default to 0 if the item is not found
}
getItemPrice4(sizeName: string): string {
  const selectedOption = this.Pineapple.find((item) => item.name === sizeName);
  return selectedOption ? selectedOption.price :'0'; // Default to 0 if the item is not found
}
getItemPrice5(sizeName: string): string {
  const selectedOption = this.Meat.find((item) => item.name === sizeName);
  return selectedOption ? selectedOption.price :'0'; // Default to 0 if the item is not found
}
}
