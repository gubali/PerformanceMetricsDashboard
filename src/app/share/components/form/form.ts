import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IEmployee } from '../../model/employee.model';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  @Output() add = new EventEmitter<IEmployee>();
  empForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      performance: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      rating: ['Good', Validators.required],
    });
  }

  addUser() {
    if (this.empForm.valid) {
      debugger;
      this.add.emit(this.empForm.value as IEmployee);
      this.empForm.reset({ rating: 'Good' });
    }
  }
}
