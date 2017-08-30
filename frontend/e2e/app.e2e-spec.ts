import { LetflixPage } from './app.po';

describe('letflix App', () => {
  let page: LetflixPage;

  beforeEach(() => {
    page = new LetflixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
