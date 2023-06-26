/// <reference types="cypress"/>

function login() {
    cy.viewport(1920,1080)
    cy.visit('http://localhost:5173/login')
    cy.get('input[name="email"]').type('student@edu.fa.ru')
    cy.get('input[name="password"]').type('secret42')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/')
    cy.wait(500)
}

describe('Checking the correct display of the Lessons Page', () => {
    it('TC_UISLP_1', () => {
        login()
        cy.get('[data-cy="all-lessons"]').click();
    });

    it('TC_UISLP_1', () => {
        login()
        cy.get('[data-cy="lesson-list"]').each((lesson) => {
        cy.wrap(lesson).find('[data-testid="lesson-title"]').should('be.visible');
        cy.wrap(lesson).find('[data-testid="lesson-icon"]').should('be.visible');
        });
    });

    it('TC_UISLP_1', () => {
        login()
        cy.get('[data-cy="all-lessons"]').first().click();
        cy.url().should('include', '/lessons');
    });
  });


