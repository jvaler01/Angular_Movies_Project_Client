import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.sass']
})
export class CardBodyComponent {
  @Input() scale : boolean = false
}
