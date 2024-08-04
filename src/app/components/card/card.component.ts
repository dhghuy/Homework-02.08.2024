import {Component, EventEmitter, Input,  Output} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  constructor(public cardService: CartService) {}

  addToCart(value: any) {
    this.cardService.addToCart(value);
  }

  //Tạo 3 biến @Input để nhận dữ liệu từ Conponent cha truyền vào
  @Input() id!: number;
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() price: number = 0;
  @Input() inStock: number = 0;
  @Input() quantity: number =0;

}
