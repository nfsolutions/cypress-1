describe('Info Page', function() {
    it('Visits the VSC', function() {
        cy.visit('https://service.post.ch/vsc/?lang=de')
        cy.contains('#default-vsc-button', 'Preise berechnen')
        cy.contains('#login-button', 'Jetzt einloggen')
        cy.contains('#kmu-vsc-button', 'Preise berechnen')
        // cy.contains('toggle-vsc-link')
    })
})


describe('Navigate Firstpage', function() {
    it('Visits the VSC', function() {
        cy.visit('https://service.post.ch/vsc/?lang=de')
        cy.contains('#default-vsc-button', 'Preise berechnen')
        cy.contains('#login-button', 'Jetzt einloggen')
        cy.contains('#kmu-vsc-button', 'Preise berechnen')
        // cy.contains('toggle-vsc-link')
    })
})
