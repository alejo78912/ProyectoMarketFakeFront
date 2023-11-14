import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent  implements OnInit{

  Sale!:Sale;
  id: string | null = localStorage.getItem('idUser');

  ced: number = this.id ? parseInt(this.id, 10) : 0;

  

  totalQuantity:number =0;

  constructor(private SaleService: SaleService,private router : Router, private route: ActivatedRoute,){}
  ngOnInit(): void {
   
  this.route.params.subscribe(params => {
    this.totalQuantity = +params['totalQuantity']; // Obtén el ID del producto desde la ruta
    
  });
  }



  

  realizarCompra(): void {
    this.Sale.user.idUser = this.ced;
  
    this.SaleService.addSale(this.Sale, this.totalQuantity).subscribe(
      (pdfBlob: Blob) => {
        // Manejar el blob del PDF aquí, por ejemplo, puedes guardarlo o mostrarlo en una nueva ventana
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
      },
      (error) => {
        console.error('Error al realizar la compra', error);
        // Manejar el error, mostrar un mensaje, etc.
      }
    );
  }
  
}
