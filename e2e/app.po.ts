export class LightSwitchAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('light-switch-app-app h1')).getText();
  }
}
