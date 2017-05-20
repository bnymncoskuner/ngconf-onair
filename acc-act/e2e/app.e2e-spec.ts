import { AccActPage } from './app.po';

describe('acc-act App', () => {
  let page: AccActPage;

  beforeEach(() => {
    page = new AccActPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
