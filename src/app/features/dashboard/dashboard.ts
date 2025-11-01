import { Component, inject, OnInit, signal } from '@angular/core';
import { DashboardStore } from '../../share/state/employee.store';
import { Form } from '../../share/components/form/form';
import { CommonModule } from '@angular/common';
import { Chart } from '../../share/components/chart/chart';
import { Card } from '../../share/components/card/card';
import { IEmployee } from '../../share/model/employee.model';
import { EmployeeApi } from '../../core/service/employee-api';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Chart, Card, Form],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  employees = signal<IEmployee[]>([]);
  empService = inject(EmployeeApi);
  ngOnInit(): void {
    this.empService.getEmployee().subscribe((data) => this.employees.set(data));
  }
  addEmployee(emp: IEmployee) {
    debugger;
    console.log(emp);
    this.empService.addEmployee(emp).subscribe((newEmp) => {
      this.employees.update((prev) => [...prev, newEmp]);
    });
  }
}
