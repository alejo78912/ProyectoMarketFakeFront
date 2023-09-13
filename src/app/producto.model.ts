export class Producto {

    codProducto: number;
    cantidadAVender: number;
    descripcionProducto: string;
    nombreProducto: string;
    valor: number;
    url_photo : string;
    idCategoria: number;

    constructor(codProducto: number,cantidadAVender: number, nombreProducto: string, descripcionProducto: string, valor: number, url_photo: string, idCategoria:number) {
        this.codProducto = codProducto;
        this.cantidadAVender = cantidadAVender;
        this.nombreProducto = nombreProducto;
        this.descripcionProducto = descripcionProducto;
        this.valor = valor;
        this.url_photo = url_photo;
        this.idCategoria = idCategoria;
    }
}
