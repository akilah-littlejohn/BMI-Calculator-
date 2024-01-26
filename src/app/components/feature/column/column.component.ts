import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  ContentInfo } from '../../../models/content-interface/interfaces';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {

@Input() title!:string;
@Input()  paragraph!:string;
@Input() columns!:Array<ContentInfo>
@Input() columnImages!:Array<string>;
}
