import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  darkMode = signal(false);

  toggleTheme() {
    this.darkMode.update((v) => !v);
    document.body.classList.toggle('dark-theme');
  }
}
