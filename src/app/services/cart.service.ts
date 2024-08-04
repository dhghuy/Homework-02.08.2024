import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  products = [
    {
      id: 1,
      name: "Product 1",
      description: "Best Seller",
      price: 10000,
      inStock: 10,
      quantity: 0
    },

    {
      id: 2,
      name: "Product 2",
      description: "Best Seller",
      price: 15000,
      inStock: 15,
      quantity: 0
    },

    {
      id: 3,
      name: "Product 3",
      description: "Best Seller",
      price: 18000,
      inStock: 5,
      quantity: 0
    }
  ]

  cart: any[] = [];
  tongTien: number = 0;

  addToCart(item: any) {
    if (this.products[item.id - 1].inStock <= 0) {
      return;
    }

    if (this.products[item.id - 1].inStock < this.products[item.id - 1].quantity) {
      return;
    }

    if(this.products[item.id -1].quantity == 0) return;
    let index = this.cart.findIndex((element) => element.id == item.id);
    let product = this.products[item.id - 1];

      if (index == -1) {
        this.cart.push(item);
        let foundIndex = this.cart.findIndex((element) => element.id == item.id);
        this.cart[foundIndex].quantity = this.products[item.id - 1].quantity;
      } else {
        this.cart[index].quantity += this.products[item.id - 1].quantity;
      }


      this.products[item.id - 1].inStock -= this.products[item.id - 1].quantity;
    }

  removeItem(index: number) {
    const [removed] = this.cart.splice(index, 1);
    this.products = this.products.map(el => el.id === removed.id ?
      { ...el, inStock: el.inStock +  el.quantity } : el);
  }

  increaseItemQuantity(id: number) {
    const index = this.indexById(id);
    if (this.products[index].quantity === this.products[index].inStock) return;
    this.products[index].quantity += 1;
  }

  decreaseItemQuantity(id: number) {
    const index = this.indexById(id);
    if (this.products[index].quantity === 0) return;
    this.products[index].quantity -= 1;
  }

  indexById(id: number) {
    const index = this.products.findIndex((element) => element.id == id);
    return index;
  }

  payCart(){
    this.tongTien = 0;
    this.cart.forEach(item => {
      this.tongTien += item.price * item.quantity;
    });
    this.cart = [];
  }
}
