import { getGreeting } from '../support/app.po';

describe('pwa-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to pwa-demo!');
  });
});
