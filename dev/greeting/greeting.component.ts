import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1 class="greet-message">Hello {{selectedPlatform}}!</h1>
  `,
  styleUrls:[
    'src/css/greeting.css'
  ]
})

export class GreetingComponent implements OnInit {
  selectedPlatform: string;
  ngOnInit():any{
  this.selectedPlatform = "_______";
    return null;
  }

}
