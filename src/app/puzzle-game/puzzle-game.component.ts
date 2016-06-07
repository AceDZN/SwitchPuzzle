import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'puzzle-game',
  templateUrl: 'puzzle-game.component.html',
  styleUrls: ['puzzle-game.component.css']
})
export class PuzzleGameComponent implements OnInit {


  combination:Array<boolean>;
  winner:boolean;
  switchone:boolean;
  switchtwo:boolean;
  switchthree:boolean;
  switchfour:boolean;
  name:string;
  steps:number;
  ngOnInit():any{
    this.combination = [false,false,false,false];
    this.combination = this.randomizeOrder();
    this.winner = false;
    this.switchone = false;
    this.switchtwo = false;
    this.switchthree = false;
    this.switchfour = false;
    this.name = '';
    this.steps = 0;
  }
  randomizeOrder():any{
    let c = [null,null,null,null];
    for(var i=0; i<4;i++){
      c[i] = Math.random() < 0.5 ? true : false
    }
    console.log(c,"C");
    if(c[0] == false && c[1] == false && c[2] == false && c[3] == false){
      return this.randomizeOrder()
    }

    return c;
  }
  restartGame():any{
    this.combination = this.randomizeOrder();
    this.winner = false;
    this.switchone = false;
    this.switchtwo = false;
    this.switchthree = false;
    this.switchfour = false;
    this.steps = 0;
  }
  onCheckboxCheck(s,c):any{
    this[s] = c.checked;
    if(this.switchone===this.combination[0] && this.switchtwo===this.combination[1] && this.switchthree===this.combination[2] && this.switchfour===this.combination[3]){
      this.winner = true;
    }

    this.steps++;
  }
  onNameInput(name){
    this.name = name.toLowerCase();
  }
}
