import { Component } from '@angular/core';
import {ForkBannerComponent} from './fork-banner/fork-banner.component';
import {PuzzleGameComponent} from './puzzle-game/puzzle-game.component';
import {AcedznLogoComponent} from './acedzn-logo/acedzn-logo.component';

@Component({
  moduleId: module.id,
  selector: 'light-switch-app-app',
  templateUrl: 'light-switch-app.component.html',
  styleUrls: ['light-switch-app.component.css'],
  directives:[
    ForkBannerComponent,
    PuzzleGameComponent,
    AcedznLogoComponent
  ]
})
export class LightSwitchAppAppComponent {
  title = 'light-switch-app works!';
}
