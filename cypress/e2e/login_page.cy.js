describe('Checking the correct display of the Login Page', () => {
    it ('TC_UILP_1', () => {
        cy.viewport(1920,1080)
        cy.visit('http://localhost:5173/login')
        cy.get('input[name="email"]').type('student@edu.fa.ru')
        cy.get('input[name="password"]').type('secret42')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/')
    })
    it ('TC_UILP_2', () => {
        cy.viewport(1920,1080)
        cy.visit('http://localhost:5173/login')
        cy.get('input[name="email"]').type('teacher@edu.fa.ru')
        cy.get('input[name="password"]').type('secret42')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/')
    })
    it ('TC_UILP_3', () => {
        cy.viewport(1920,1080)
        cy.visit('http://localhost:5173/login')
        cy.get('input[name="email"]').type('student@edu.fa.ru')
        cy.get('input[name="password"]').type('secret42')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/')
        cy.wait(1000)
        cy.get('[data-cy="logout"]').click()
        cy.url().should('include', '/login')
    })
})




