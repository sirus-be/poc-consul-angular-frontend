import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {
  config: AppConfig;

  constructor(private httpClient: HttpClient) { }

  public initializeApp() {
    return new Promise<void>((resolve, reject) => {
      this.httpClient.get<AppConfig>('/assets/appconfig.json')
        .subscribe(response => this.configurationLoaded(response, resolve),
          err => this.startupError(err, reject));
    });
  }

  private configurationLoaded(config: AppConfig, resolve) {
    this.config = config;
    resolve();
  }

  private startupError(err: Error, reject) {
    console.error(err);
    reject();
  }
}
