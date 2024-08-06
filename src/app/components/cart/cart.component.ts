import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CartService} from "../../services/cart.service";
import {productModel} from "../../models/product.model";
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ MatIconModule, MatDividerModule, MatButtonModule, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(public cartService: CartService) {}

}
