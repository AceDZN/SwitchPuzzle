import { LightSwitchAppPage } from './app.po';

describe('light-switch-app App', function() {
  let page: LightSwitchAppPage;

  beforeEach(() => {
    page = new LightSwitchAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('light-switch-app works!');
  });
});
