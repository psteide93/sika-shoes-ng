import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  constructor(private productService: ProductsService ){}
  products: Product[] = []
  error = false
  ngOnInit() {
    return this.productService.getProducts().subscribe(response =>{
     this.products = response.products
    })
  }
}
