import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-card-body',
    templateUrl: './card-body.component.html',
    styleUrls: ['./card-body.component.sass'],
    standalone: true,
    imports: [NgClass]
})
export class CardBodyComponent {
  @Input() scale : boolean = false
}
