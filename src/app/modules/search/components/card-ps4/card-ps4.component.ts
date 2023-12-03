import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-ps4',
  templateUrl: './card-ps4.component.html',
  styleUrls: ['./card-ps4.component.css']
})
export class CardPs4Component {
  coleccionProductos: Producto[] = []; // todos los productos

  ps4: Producto[] = []; // productos categoría = ps3

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;

      this.mostrarPs4();
    })
  }

  mostrarVer(info: Producto){
    // al seleccionar "ver más" el modal visible pasa a "true"
    this.modalVisible = true;
    // muestra la información del producto que se seleccione
    this.productoSeleccionado = info;
  }

  mostrarPs4(){
    // forEach itera la colección/ arreglo
    this.coleccionProductos.forEach(producto =>{
      /* si la categoría del producto es igual a "collares"
        se va a enviar a la colección "collares"*/
      if(producto.categoria === "PS4"){
        this.ps4.push(producto);
      }
    })
  }
}