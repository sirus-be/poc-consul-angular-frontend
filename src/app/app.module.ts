import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoModule } from '@acpaas-ui/ngx-components/logo';
import { FooterModule, HeaderModule } from '@acpaas-ui/ngx-components/layout';
import { AppInitializerService } from './app-initializer.service';
import { HttpClientModule } from '@angular/common/http';

export function initializeApp(appInitializer: AppInitializerService) {
  return () => appInitializer.initializeApp();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LogoModule,
    HeaderModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [ AppInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitializerService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
