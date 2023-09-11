export class Producto {

    codProducto: number;
    cantidadAVender: string;
    descripcionProducto: string;
    nombreProducto: string;
    valor: number;
    url_photo : string;
    nombreCategoria: string;

    constructor(codProducto: number,cantidadAVender: string, nombreProducto: string, descripcionProducto: string, valor: number, url_photo: string, nombreCategoria:string) {
        this.codProducto = codProducto;
        this.cantidadAVender = cantidadAVender;
        this.nombreProducto = nombreProducto;
        this.descripcionProducto = descripcionProducto;
        this.valor = valor;
        this.url_photo = url_photo;
        this.nombreCategoria = nombreCategoria;
    }
}
