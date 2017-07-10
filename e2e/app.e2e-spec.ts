import { WonderworksSpecialtyCakesPage } from './app.po';

describe('wonderworks-specialty-cakes App', () => {
  let page: WonderworksSpecialtyCakesPage;

  beforeEach(() => {
    page = new WonderworksSpecialtyCakesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
