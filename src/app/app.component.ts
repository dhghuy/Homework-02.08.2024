import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {CartService} from "./services/cart.service";
import {CartComponent} from "./components/cart/cart.component";
import {MatButton} from "@angular/material/button";
import {AuthService} from "./services/auth.service";
import {ListProductComponent} from "./pages/list-product/list-product.component";
import {NavbarComponent} from "./components/navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CartComponent, MatButton, ListProductComponent, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Demo1';

  constructor(public cartService: CartService,
              public authService: AuthService) {}

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  protected readonly AuthService = AuthService;
}
