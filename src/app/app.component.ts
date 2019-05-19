import { Component, OnInit } from '@angular/core';
import { AppInitializerService } from './app-initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private configProvider: AppInitializerService) {
  }

  ngOnInit() {
    this.title = this.configProvider.config.title;
  }
}
