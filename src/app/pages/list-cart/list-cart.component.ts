import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitleGroup} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {productModel} from "../../models/product.model";
import {CartComponent} from "../../components/cart/cart.component";

@Component({
  selector: 'app-list-cart',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitleGroup,
    MatCardContent,
    MatButton,
    CartComponent
  ],
  templateUrl: './list-cart.component.html',
  styleUrl: './list-cart.component.scss'
})
export class ListCartComponent {

  constructor(public cartService: CartService,
              public auth: AuthService,
              private activatedRoute: ActivatedRoute) {

  }
}
