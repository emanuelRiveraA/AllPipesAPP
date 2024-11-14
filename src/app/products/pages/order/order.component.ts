import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;//si es true lo cambia a false y vicebersa
  }
}
