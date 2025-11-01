import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployee } from '../../model/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() employee!: IEmployee;
  constructor() {
    console.log(this.employee);
  }
  getEmpDataById(id: number) {
    console.log('CLicked id is' + id);
  }
}
