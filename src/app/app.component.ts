import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
    }
    .main-content {
      flex: 1;
      padding: 0;
      width: 100%;
      margin: 0;
    }
  `]
})
export class AppComponent {
  title = 'National Agency for Scientific Research and Innovation';
}
