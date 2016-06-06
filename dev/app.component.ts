import {Component} from '@angular/core';
import {ForkBannerComponent} from './fork-banner.component';
import {PuzzleComponent} from './puzzle/puzzle.component';
import {AceDZNLogoComponent} from './acedzn-logo.component';

@Component({
    selector: 'ng-app',
    template: `
        <fork-banner></fork-banner>
        
        <ace-puzzle></ace-puzzle>
        <acedzn-logo></acedzn-logo>
    `,
    directives: [
      ForkBannerComponent,
      PuzzleComponent,
      AceDZNLogoComponent
    ]
})
export class AppComponent {

}
