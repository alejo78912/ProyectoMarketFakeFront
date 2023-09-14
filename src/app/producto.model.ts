import { Categoria } from './categoria.model';

export class Producto {
  codProducto: number;
  valor: number;
  url_photo: string;
  cantidadAVender: number;
  categoria: Categoria;
  nombreProducto: string;
  descripcionProducto: string;

  constructor(
    codProducto: number,
    valor: number,
    url_photo: string,
    cantidadAVender: number,
    categoria: Categoria,
    nombreProducto: string,
    descripcionProducto: string
  ) {
    this.codProducto = codProducto;
    this.valor = valor;
    this.url_photo = url_photo;
    this.cantidadAVender = cantidadAVender;
    this.categoria = categoria;
    this.nombreProducto = nombreProducto;
    this.descripcionProducto = descripcionProducto;
  }
}





