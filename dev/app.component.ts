import {Component} from '@angular/core';
import {PlatformsListComponent} from './greeting/platforms-list.component';
import {GreetingComponent} from './greeting/greeting.component';
import {ForkBannerComponent} from './fork-banner.component';
import {AceDZNLogoComponent} from './acedzn-logo.component';

@Component({
    selector: 'ng-app',
    template: `
        <fork-banner></fork-banner>
        <greeting></greeting>
        <platforms-list></platforms-list>
        <div class="angular-logo" style="">
          <svg class="" width="200" height="100%" viewBox="0 0 299 418" version="1.1">
              <g id="js" transform="translate(0,-100)">
                <path d="M27.142,383.29 L0.071,79.67 L297.521,79.67 L270.425,383.241 L148.614,417.011 L27.142,383.29 L27.142,383.29 Z" id="Shape" fill="#B92933" />
                <path d="M148.798,391.199 L247.225,363.911 L270.382,104.496 L148.798,104.496 L148.798,391.199 L148.798,391.199 Z" id="Shape" fill="#E62A39" />
                <path d="M148.57427,121.670256 L229.221594,338.396861 L199.561729,338.396861 L180.997882,295.164253 L145.827923,295.16426 L145.827923,269.567732 L171.342928,269.567732 L148.823994,201.166825" id="Path-11" fill="#EBFAF3" />
                <path d="M148.928608,121.461028 L52.9266393,338.06952 L85.5080482,338.06952 L105.950203,295.638974 L148.179203,295.638976 L148.179206,269.717243 L117.535152,269.717238 L149.498924,201.396301" id="Path-12" fill="#B3B3B3" />
              </g>
          </svg>
        </div>
        <acedzn-logo></acedzn-logo>
    `,
    directives: [
      PlatformsListComponent,
      GreetingComponent,
      ForkBannerComponent,
      AceDZNLogoComponent
    ]
})
export class AppComponent {

}
