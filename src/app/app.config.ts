import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NbIconLibraries, NbThemeModule } from '@nebular/theme';

import { routes } from './app.routes';
import { NbEvaIconsModule } from '@nebular/eva-icons';

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
    provideClientHydration(withEventReplay()),
    ...(NbThemeModule.forRoot({ name: 'default' }).providers as any),
/*    NbEvaIconsModule,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [NbIconLibraries],
      multi: true,
    },*/
  ]
};
