import { Component, Input } from '@angular/core';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { IEmployee } from '../../model/employee.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chart',
  imports: [BaseChartDirective, CommonModule],
  standalone: true,
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
  providers: [provideCharts(withDefaultRegisterables())],
})
export class Chart {
  @Input() data: IEmployee[] = [];

  barType: ChartType = 'bar';
  pieType: ChartType = 'pie';

  get chartData(): ChartConfiguration['data'] {
    return {
      labels: this.data.map((e) => e.name),
      datasets: [
        {
          label: 'Performance (%)',
          data: this.data.map((e) => e.performance ?? 0),
          backgroundColor: '#2563eb66',
        },
      ],
    };
  }

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  };
}
