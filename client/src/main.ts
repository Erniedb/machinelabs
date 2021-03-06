import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

declare const ga: any;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if (environment.production) {
      ga('require', 'urlChangeTracker');
      ga('send', 'pageview');
    }
  })
  .catch(err => console.log(err));
