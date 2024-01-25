import { Component, Input } from '@angular/core';
import { BmiCardComponent } from '../../ui/bmi-card/card.component';

@Component({
    selector: 'app-article',
    standalone: true,
    templateUrl: './article.component.html',
    styleUrl: './article.component.css',
    imports: [ BmiCardComponent]
})
export class ArticleComponent {
  @Input()title!: string;
  @Input()paragraph !: string;
}
