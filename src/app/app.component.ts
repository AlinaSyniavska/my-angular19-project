import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule, NbIconModule,
  NbLayoutModule, NbMenuItem, NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // RouterLinkActive, RouterLink,
    NbThemeModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbActionsModule,
    NbIconModule,
    NbEvaIconsModule,
    NbMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  providers: [ NbSidebarService ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/',
      pathMatch: 'full',
    },
    {
      title: 'About',
      icon: 'info-outline',
      link: '/about',
    },
    {
      title: 'Products',
      icon: 'shopping-cart-outline',
      link: '/products',
    },
    {
      title: 'Admin',
      icon: 'settings-2-outline',
      link: '/admin',
    },
  ];

  constructor(
    private sidebarService: NbSidebarService,
  ) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
