/// <reference types="cypress"/>

    function login() {
        cy.viewport(1920,1080)
        cy.visit('http://localhost:5173/login')
        cy.get('input[name="email"]').type('teacher@edu.fa.ru')
        cy.get('input[name="password"]').type('secret42')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/teacher')
    }
    
describe('Checking the correct transition and displaying the content of lessons on the Lessons page', () => {
    
    it ('TC_UITMP_1', () => {
        login()
        cy.get('[data-testid="title-groups"]').contains("Мои группы")
        cy.get('[data-testid="title-subjects"]').contains("Мои предметы")
    })

    it ('TC_UITMP_1', () => {
        login()
        cy.visit('http://localhost:5173/add-lesson')
        cy.get('[data-testid="goToLesson"]').first().click()
        cy.get('[data-testid="btn"]').first().click()
        cy.get('[data-testid="add"]').first().click()
        cy.get('[data-testid="title-add-presentation"]').contains("Презентация")
        cy.get('[data-testid="title-add-document"]').contains("Лекция")
        cy.get('[data-testid="menu-item_create_lesson"]').contains("Добавить")
    })
})


