// products.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../../../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productos: Producto[] = [
    { id: 1, titulo: 'Product 1', imagen: 'product1.jpg', precio: 19.99 },
    { id: 2, titulo: 'Product 2', imagen: 'product2.jpg', precio: 29.99 },
    // Add more products as needed
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductById(id: number): Producto | undefined {
    return this.productos.find((producto) => producto.id === id);
  }
}
