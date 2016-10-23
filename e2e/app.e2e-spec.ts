import { EventEmitterExamplesPage } from './app.po';

describe('event-emitter-examples App', function() {
  let page: EventEmitterExamplesPage;

  beforeEach(() => {
    page = new EventEmitterExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
