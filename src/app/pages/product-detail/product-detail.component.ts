import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {productModel} from "../../models/product.model";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitleGroup} from "@angular/material/card";
import {CartComponent} from "../../components/cart/cart.component";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    CartComponent,
    MatButton
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  detailProduct: productModel;

  constructor(private activatedRoute: ActivatedRoute,
              public cartService: CartService,
              public auth: AuthService) {
    const {id} = this.activatedRoute.snapshot.params;
    // console.log(id);

    // tim product tuong ung voi id
    this.detailProduct = this.cartService.products.find(product => product.id === parseInt(id))!;
  }
}
