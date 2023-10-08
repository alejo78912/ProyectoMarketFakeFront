import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  containerClass = '';

  togglePanel() {
    this.containerClass = this.containerClass === 'right-panel-active' ? '' : 'right-panel-active';
  }

}
