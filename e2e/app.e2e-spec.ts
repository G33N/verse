import { VersePage } from './app.po';

describe('verse App', () => {
  let page: VersePage;

  beforeEach(() => {
    page = new VersePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
