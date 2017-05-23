import { TutorialTodoAppSpaPage } from './app.po';

describe('tutorial-todo-app-spa App', function() {
  let page: TutorialTodoAppSpaPage;

  beforeEach(() => {
    page = new TutorialTodoAppSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
