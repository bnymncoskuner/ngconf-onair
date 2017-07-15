import { AngularModuleDemoPage } from './app.po';

describe('angular-module-demo App', () => {
  let page: AngularModuleDemoPage;

  beforeEach(() => {
    page = new AngularModuleDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
