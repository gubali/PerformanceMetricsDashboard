import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  darkMode = signal(false);
  toggle() {
    this.darkMode.update((v) => !v);
    document.body.classList.toggle('dark', this.darkMode());
  }
}
