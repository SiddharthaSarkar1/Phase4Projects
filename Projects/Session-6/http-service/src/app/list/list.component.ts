import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service:ProductService) { }

  products:Product[];

  ngOnInit(): void {

    //result=service.getAllProducts();
    this.service.getProducts().subscribe(result=>this.products=result);

  }

}
