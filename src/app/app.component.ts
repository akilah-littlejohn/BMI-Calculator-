import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiLayoutComponent } from './components/ui/bmi-layout/bmi-layout.component';
import { ArticleComponent } from './components/feature/article/article.component';
import { CalculatorComponent } from './components/feature/calculator/calculator.component';
import { CardsComponent } from './components/feature/cards/cards.component';
import { ColumnComponent } from './components/feature/column/column.component';
import { HeaderComponent } from './components/feature/header/header.component';
import { ContentItems } from './models/constants/content';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    BmiLayoutComponent, 
    ArticleComponent, 
    CalculatorComponent, 
    CardsComponent, 
    ColumnComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
bmi = ContentItems;
}
