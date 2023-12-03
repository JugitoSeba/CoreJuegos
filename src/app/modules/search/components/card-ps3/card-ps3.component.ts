import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-ps3',
  templateUrl: './card-ps3.component.html',
  styleUrls: ['./card-ps3.component.css']
})
export class CardPs3Component {
  coleccionProductos: Producto[] = []; // todos los productos

  ps3: Producto[] = []; // productos categoría = ps3

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;

      this.mostrarPs3();
    })
  }

  mostrarVer(info: Producto){
    // al seleccionar "ver más" el modal visible pasa a "true"
    this.modalVisible = true;
    // muestra la información del producto que se seleccione
    this.productoSeleccionado = info;
  }

  mostrarPs3(){
    // forEach itera la colección/ arreglo
    this.coleccionProductos.forEach(producto =>{
      /* si la categoría del producto es igual a "collares"
        se va a enviar a la colección "collares"*/
      if(producto.categoria === "PS3"){
        this.ps3.push(producto);
      }
    })
  }
}