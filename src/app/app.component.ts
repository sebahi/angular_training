import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div class="title">
              <span>This is SportsStore.</span>
            </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SportsStore';
}
