import { Component } from '@angular/core';
interface SizeOption {
  name: string;
  price: string;
}
@Component({
  selector: 'app-soltana',
  templateUrl: './soltana.component.html',
  styleUrls: ['./soltana.component.css']
})
export class SoltanaComponent {
  constructor(){};
  
  Margherita: SizeOption[] = [
   { name: 'Tastira',    price: '28 DT' },
    { name: 'Spaghetti', price:'28 DT' },
    { name: 'Rice',      price: '28 DT' },
    { name: 'Salad',     price: '28 DT' },
  ];
 
   Formaggio: SizeOption[] = [
    { name: 'Tastira', price: '22 DT' },
     { name: 'Spaghetti', price:'22 DT' },
     { name: 'Rice', price: '22 DT' },
     { name: 'Salad', price: '22 DT' },
   ];
   Chicken: SizeOption[] = [    { name: 'Tastira', price: '32 DT' },
     { name: 'Spaghetti', price:'32 DT' },
     { name: 'Rice', price: '32 DT' },
     { name: 'Salad', price: '32 DT' },
   ];
   Pineapple: SizeOption[] = [
    { name: 'Tastira', price: '34 DT' },
     { name: 'Spaghetti', price:'34 DT' },
     { name: 'Rice', price: '34 DT' },
     { name: 'Salad', price: '34 DT' },
   ];
   Meat: SizeOption[] = [
    { name: 'Tastira', price: '34 DT' },
     { name: 'Spaghetti', price:'34 DT' },
     { name: 'Rice', price: '34 DT' },
     { name: 'Salad', price: '34 DT' },
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
