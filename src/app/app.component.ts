import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div class="md-padding p-2 text-center text-white">
              This is SportsStore
              <button mat-button>Click Me!</button>
            </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SportsStore';
}
