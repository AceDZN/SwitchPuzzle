import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LightSwitchAppAppComponent } from '../app/light-switch-app.component';

beforeEachProviders(() => [LightSwitchAppAppComponent]);

describe('App: LightSwitchApp', () => {
  it('should create the app',
      inject([LightSwitchAppAppComponent], (app: LightSwitchAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'light-switch-app works!\'',
      inject([LightSwitchAppAppComponent], (app: LightSwitchAppAppComponent) => {
    expect(app.title).toEqual('light-switch-app works!');
  }));
});
