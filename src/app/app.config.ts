import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { NbIconLibraries, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { routes } from './app.routes';

function initializeIcons(iconLibraries: NbIconLibraries) {
  iconLibraries.registerSvgPack('eva', { }); // Або інші параметри за потребою
  iconLibraries.setDefaultPack('eva');
  return () => {};
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions(), // Додає анімацію переходів між сторінками
      withComponentInputBinding() // Дозволяє передавати параметри маршруту як @Input() в компоненти
    ),
    // provideClientHydration(withEventReplay()), // provideClientHydration() потрібен лише тоді, коли сервер рендерить HTML, і потім клієнт гідрує (SSR)
    ...(NbThemeModule.forRoot({ name: 'default' }).providers as any),
    NbEvaIconsModule,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [NbIconLibraries],
      multi: true,
    },
  ]
};
