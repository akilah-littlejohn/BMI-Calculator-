import { Component, Input } from '@angular/core';
import { ContentInfo } from '../../../models/content-interface/interfaces';
import { BmiCardComponent } from '../../ui/bmi-card/card.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BmiCardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input()cardItems!: Array<ContentInfo>
  @Input() cardImages!:Array<string>;
}
