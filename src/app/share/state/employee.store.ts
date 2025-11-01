import { Injectable, computed, signal, inject } from '@angular/core';
import { EmployeeApi } from '../../core/service/employee-api';
import { IEmployee } from '../model/employee.model';

@Injectable({ providedIn: 'root' })
export class DashboardStore {
  private service = inject(EmployeeApi);

  employees = signal<IEmployee[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  metrics = computed(() => {
    const list = this.employees();
    const avg = list.length ? list.reduce((a, e) => a + (e?.performance ?? 0), 0) / list.length : 0;
    const top = list.reduce(
      (p, c) => ((c.performance ?? 0) > (p.performance ?? 0) ? c : p),
      list[0] ?? null
    );
    return { total: list.length, avg: avg.toFixed(1), top };
  });

  chartData = computed(() => this.employees().map((e) => ({ name: e.name, value: e.performance })));

  loadEmployees() {
    this.loading.set(true);
    this.service.getEmployee().subscribe({
      next: (data) => {
        this.employees.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      },
    });
  }

  addEmployee(emp: Omit<IEmployee, 'id' | 'rating'>) {
    const rating =
      (emp.performance ?? 0) >= 90
        ? 'Excellent'
        : (emp.performance ?? 0) >= 75
        ? 'Good'
        : (emp.performance ?? 0) >= 50
        ? 'Average'
        : 'Poor';

    this.service.addEmployee({ ...emp, rating, id: 0 }).subscribe({
      next: (newEmp) => this.employees.update((list) => [...list, newEmp]),
      error: (err) => this.error.set(err.message),
    });
  }
}
