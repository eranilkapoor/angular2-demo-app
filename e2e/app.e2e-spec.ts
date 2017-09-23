import { ShopnzaPage } from './app.po';

describe('shopnza App', () => {
  let page: ShopnzaPage;

  beforeEach(() => {
    page = new ShopnzaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
