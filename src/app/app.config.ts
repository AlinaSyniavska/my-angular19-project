import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions(), // Додає анімацію переходів між сторінками
      withComponentInputBinding() // Дозволяє передавати параметри маршруту як @Input() в компоненти
    ),
    provideClientHydration(withEventReplay()) ]
};
