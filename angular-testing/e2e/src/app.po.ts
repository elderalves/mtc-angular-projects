import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/users');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  getFirstUser() {
    return element(by.css('.user-list li a'));
  }

  getInputField() {
    return element(by.css('input'));
  }

  clickSubmitButton() {
    return element(by.css('button')).click();
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}
