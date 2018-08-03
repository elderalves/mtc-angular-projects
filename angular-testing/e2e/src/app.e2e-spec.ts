import { AppPage } from './app.po';
import { browser } from '../../node_modules/protractor';
import { ECANCELED } from 'constants';

describe('test-angular-draft App', () => {
  let page: AppPage;
  const EC = browser.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Users');
  });

  it('should edit the first user', async () => {
    page.navigateTo();
    await page.getFirstUser().click();
    await browser.wait(EC.presenceOf(await page.getInputField()));
    await page.getInputField().clear();
    await page.getInputField().sendKeys('Douglas');
    await page.clickSubmitButton();
    await browser.wait(EC.presenceOf(await page.getFirstUser()));
    browser.sleep(2000);
    const userName = await page.getFirstUser().getText();
    expect(userName).toContain('Douglas');
  });
});
