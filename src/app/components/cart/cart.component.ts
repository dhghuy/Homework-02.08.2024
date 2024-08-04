import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CartService} from "../../services/cart.service";
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ MatIconModule, MatDividerModule, MatButtonModule, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(public cardService: CartService) {}

  @Input() id!: number;
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() price: number = 0;
  @Input() inStock: number = 0;
  @Input() quantity: number =0;

}
