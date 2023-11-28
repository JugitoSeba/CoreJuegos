// products.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../../../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productos: Producto[] = [
    { id: 1, titulo: 'Dark Souls 3', imagen: 'darksols.jpg', precio: 1300 },
    { id: 2, titulo: 'Batman:Arkham Knight', imagen: 'batman-arkham-knight1-a80e8acd8cdda0e16915535401463378-640-0.j.jpg', precio: 1000 },
    
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductById(id: number): Producto | undefined {
    return this.productos.find((producto) => producto.id === id);
  }
}
