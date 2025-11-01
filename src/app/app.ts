import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './share/ui/header/header';
import { Sidebar } from './share/ui/sidebar/sidebar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('EmployeeDashbordMetrics');
  isDark = signal(false);
  toggleTheme() {
    this.isDark.set(!this.isDark());
  }
}
