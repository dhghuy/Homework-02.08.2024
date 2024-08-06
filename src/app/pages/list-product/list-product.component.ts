import { Component } from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {CartService} from "../../services/cart.service";
import {CartComponent} from "../../components/cart/cart.component";
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [
    CardComponent,
    CartComponent,
    MatButton,
    RouterOutlet,
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  constructor(public cartService: CartService, public auth: AuthService) {}
}

