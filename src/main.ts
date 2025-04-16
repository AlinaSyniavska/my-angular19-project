import { bootstrapApplication } from '@angular/platform-browser';
import { destroyPlatform } from '@angular/core';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

destroyPlatform();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

