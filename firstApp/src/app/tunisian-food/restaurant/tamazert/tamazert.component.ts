import { Component } from '@angular/core';
interface SizeOption {
  name: string;
  price: string;
}
@Component({
  selector: 'app-tamazert',
  templateUrl: './tamazert.component.html',
  styleUrls: ['./tamazert.component.css']
})
export class TamazertComponent {
  constructor(){};
  Margherita: SizeOption[] = [
   { name: 'L', price: '10 DT' },
    { name: 'XL', price:'13 DT' },

  ];
 
   Formaggio: SizeOption[] = [
    { name: 'L', price: '10 DT' },
    { name: 'XL', price:'13 DT' },
    
   ];
   Chicken: SizeOption[] = [    { name: 'L', price: '12 DT' },
     { name: 'XL', price:'14 DT' },
     
   ];
   Pineapple: SizeOption[] = [
    { name: 'L', price: '13 DT' },
     { name: 'XL', price:'16 DT' },
   
   ];
   Meat: SizeOption[] = [
    { name: 'L', price: '14 DT' },
     { name: 'XL', price:'17 DT' },
  
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
