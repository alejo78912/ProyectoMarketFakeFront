// sale.component.ts

import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../sale.model';
import { User } from 'src/app/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sale: Sale = new Sale();
  id: string | null = localStorage.getItem('idUser');
  ced: number = this.id ? parseInt(this.id, 10) : 0;
  totalQuantity: number = 0;
  purchaseSuccessful: boolean = false;
  pdfBlob: Blob | null = null;

  usuario: User = { idUser: this.ced,
    name: "",
    lastname: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: "",
    address:""}; 

  constructor(private saleService: SaleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    
  }

  realizarCompra(): void {
    console.log(this.usuario.idUser)
  
    this.saleService.addSale(this.usuario).subscribe(
      (pdfBlob: Blob) => {
        SwalUtils.customMessageOk("Excelente", "La compra se pudo realizar")
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
        this.purchaseSuccessful = true;
      
      },
      (error) => {
        // Handle error
        if (error instanceof HttpErrorResponse && error.status === 400) {
         SwalUtils.customMessageError("UPS", "La compra no se pudo realizar")
          // Handle the case where the cart is empty
        } else {
          SwalUtils.customMessageError('Error al realizar la compra', error);
          // Handle other errors
        }
      }
    );
  }
  
  

  downloadPDF(): void {
    if (this.pdfBlob) {
      const url = URL.createObjectURL(this.pdfBlob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Compra.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Optional: Revoke the Object URL to free up resources
      URL.revokeObjectURL(url);
    }
  }

  atras():void{
    this.router.navigateByUrl("articulos")
  }
}
