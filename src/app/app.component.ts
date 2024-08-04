import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {CartService} from "./services/cart.service";
import {CartComponent} from "./components/cart/cart.component";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CartComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Demo1';

  constructor(public cartService: CartService) {}

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }
}
