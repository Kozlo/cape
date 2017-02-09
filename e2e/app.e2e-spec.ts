import { CapePage } from './app.po';

describe('cape App', function() {
  let page: CapePage;

  beforeEach(() => {
    page = new CapePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
