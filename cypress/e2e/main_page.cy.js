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
  
  describe('Checking the correct display of the Main Page', () => { 
    it('TC_UISMP_1', () => {
        login()
      cy.get('[data-cy="lesson-list"]').each((el) => {
        cy.wrap(el).find('[data-cy="item-card"]').should('exist');
      });
    });
    it('TC_UISMP_1', () => {
        login()
        cy.wait(500)
      const userName = 'Nikita Tyrkin';
      cy.get('h1').contains(`Добро пожаловать, ${userName}!`);
    });

    it('TC_UISMP_1', () => {
        login()
        cy.get('[data-cy="all-lessons"]').click();
        cy.url().should('include', '/lessons');
      });
  
    it('TC_UISMP_1', () => {
        login()
      cy.get('[data-cy="lesson-list"]').should('exist');
    });
  
  });

