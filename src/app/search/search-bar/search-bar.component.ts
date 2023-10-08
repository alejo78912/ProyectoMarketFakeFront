import { Component, EventEmitter, Output } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  busqueda: string = '';
  
  constructor(private sharedService: SharedServiceService) {}

  onSearch() {
    this.sharedService.setSearchQuery(this.busqueda);
  }

}
