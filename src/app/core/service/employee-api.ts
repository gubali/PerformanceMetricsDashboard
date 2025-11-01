import { Injectable, signal } from '@angular/core';
import { IEmployee } from '../../share/model/employee.model';
import { EMPLOYEE_MOCK_DATA } from '../mock/employee-mock';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApi {
  private employees = signal<IEmployee[]>(EMPLOYEE_MOCK_DATA);
  getEmployee(): Observable<IEmployee[]> {
    return of(this.employees()).pipe(delay(400));
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    debugger;
    const newEmployee = { ...employee, id: Date.now() };
    this.employees.update((list) => [...list, newEmployee]);
    return of(newEmployee).pipe(delay(400));
  }
  selectEmployeeById(id: number) {
    console.log('id clicked', id);
  }
}
