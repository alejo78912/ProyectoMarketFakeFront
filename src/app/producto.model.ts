export class Producto {

    codProducto: number;
    cantidadAVender: string;
    descripcionProducto: string;
    nombreProducto: string;
    valor: number;
    urlPhoto : string;
    nombreCategoria: string;

    constructor(codProducto: number,cantidadAVender: string, nombreProducto: string, descripcionProducto: string, valor: number, urlPhoto: string, nombreCategoria:string) {
        this.codProducto = codProducto;
        this.cantidadAVender = cantidadAVender;
        this.nombreProducto = nombreProducto;
        this.descripcionProducto = descripcionProducto;
        this.valor = valor;
        this.urlPhoto = urlPhoto;
        this.nombreCategoria = nombreCategoria;
    }
}
