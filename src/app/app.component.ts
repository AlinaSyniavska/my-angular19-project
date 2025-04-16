import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule, NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLinkActive, RouterLink, NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbActionsModule, NbIconModule, NbEvaIconsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  providers: [ NbSidebarService ],
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
