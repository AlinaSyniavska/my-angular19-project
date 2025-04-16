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

export function getAppProviders(): ApplicationConfig['providers'] {
  const platformId = typeof window !== 'undefined' ? 'browser' : 'server';

  const isBrowser = platformId === 'browser';

  return [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    // provideClientHydration(withEventReplay()), // provideClientHydration() потрібен лише тоді, коли сервер рендерить HTML, і потім клієнт гідрує (SSR)
    ...(isBrowser ? (NbThemeModule.forRoot({ name: 'default' }).providers as any) : []),
    NbEvaIconsModule,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [NbIconLibraries],
      multi: true,
    },
  ];
}

export const appConfig: ApplicationConfig = {
  providers: getAppProviders(),
};
