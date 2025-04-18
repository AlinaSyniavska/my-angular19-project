import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule, NbIconModule,
  NbLayoutModule, NbMenuItem, NbMenuModule, NbMenuService,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { filter } from 'rxjs';

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
  providers: [ NbSidebarService,  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/',
      home: true,
      pathMatch: 'full'
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
    private menuService: NbMenuService,
    private router: Router,
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Знаходимо відповідний пункт меню на основі URL
      const currentPath = event.url === '/' ? '/' : `/${event.url.split('/')[1]}`;

      // Знаходимо індекс елемента, який треба активувати
      const index = this.items.findIndex(item =>
        (currentPath === '/' && item.link === '/') ||
        (item.link === currentPath)
      );

      if (index !== -1) {
        // Встановлюємо вибраний елемент
        this.items.forEach((item, i) => {
          // Очищаємо попередній активний стан
          item.selected = i === index;
        });
      }
    });

    // Підписуємось на вибір елементу з меню
    this.menuService.onItemClick()
      .subscribe((event) => {
        if (event.item.link) {
          this.router.navigate([event.item.link]);
        }
      });
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
