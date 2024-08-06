import {Component, EventEmitter, Input,  Output} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {AuthService} from "../../services/auth.service";
import {productModel} from "../../models/product.model";
import {CartComponent} from "../cart/cart.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, CartComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  constructor(public cardService: CartService, public auth: AuthService) {}

  @Input() product!: productModel;
}
