import { AngularLecturePage } from './app.po';

describe('angular-lecture App', () => {
  let page: AngularLecturePage;

  beforeEach(() => {
    page = new AngularLecturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
