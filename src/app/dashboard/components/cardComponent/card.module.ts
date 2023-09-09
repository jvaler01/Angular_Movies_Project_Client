import { NgModule } from '@angular/core';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardOutTextComponent } from './card-out-text/card-out-text.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CardContainerComponent,
    CardComponent,
    CardBodyComponent,
    CardOutTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardContainerComponent,
    CardComponent,
    CardBodyComponent,
    CardOutTextComponent
  ]
})
export class CardModule { }
