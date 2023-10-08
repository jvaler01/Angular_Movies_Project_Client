import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass'],
    standalone: true,
    imports: [NgClass]
})
export class CardComponent {
  @Input() title = '';
  @Input() scale : boolean = false
}
