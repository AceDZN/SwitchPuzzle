import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PuzzleGameComponent } from './puzzle-game.component';

describe('Component: PuzzleGame', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PuzzleGameComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PuzzleGameComponent],
      (component: PuzzleGameComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PuzzleGameComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PuzzleGameComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <puzzle-game></puzzle-game>
  `,
  directives: [PuzzleGameComponent]
})
class PuzzleGameComponentTestController {
}
