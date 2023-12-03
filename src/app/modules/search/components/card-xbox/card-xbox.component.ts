import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-xbox',
  templateUrl: './card-xbox.component.html',
  styleUrls: ['./card-xbox.component.css']
})
export class CardXboxComponent {
  coleccionProductos: Producto[] = []; // todos los productos

  xbox: Producto[] = []; // productos categoría = xbox

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;

      this.mostrarXbox();
    })
  }

  mostrarVer(info: Producto){
    // al seleccionar "ver más" el modal visible pasa a "true"
    this.modalVisible = true;
    // muestra la información del producto que se seleccione
    this.productoSeleccionado = info;
  }

  mostrarXbox(){
    // forEach itera la colección/ arreglo
    this.coleccionProductos.forEach(producto =>{
      /* si la categoría del producto es igual a "collares"
        se va a enviar a la colección "collares"*/
      if(producto.categoria === "XBOX"){
        this.xbox.push(producto);
      }
    })
  }
}