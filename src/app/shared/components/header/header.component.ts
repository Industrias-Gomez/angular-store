import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service'
import { Product } from 'src/app/product.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total = 0;
  constructor(
    private cartService: CartService,
  ) {
    this.cartService.cart$
    .pipe(
      map(products => products.length)
    )
    .subscribe(total=>{
      this.total = total;
    })
    // .subscribe((products: Product[]) => {
    //   this.total = products.length;
    //   // console.log(this.total);
    // })
  }

  ngOnInit(): void {
  }

}
