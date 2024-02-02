import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { colorTypes, ProductListModel } from '../../../models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'j-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() type: colorTypes = 'accent';
  @Input() config!: ProductListModel;
  @Output() request = new EventEmitter<ProductListModel>();
  @HostBinding('class') cssClassName = 'j-card';
  sendRequest(type: string) {
    if (type === 'Request access' && !this.config?.accessSend) {
      this.request.emit(this.config);
    }
  }
}
