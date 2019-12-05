// describe('Info Page', function() {
//     it('Visits the VSC', function() {
//         cy.visit('https://www.post.ch')
//         // cy.viewport(2000, 1500)
//         // cy.get('#el').type('supercalifragilisticexpialidocious')
//         cy.get('[tabindex="0"]').click()
//         cy.get('#externalIDP').click()
//         cy.get('#idToken4').type('nydi@gmx.net')
//         cy.get('#validationButton').click()
//         cy.get('#idToken5').type('schnuegga$75')
//         cy.get('#idToken6_0').click()
//         cy.get('.ppm-cc-link-list__item').contains('Preise berechnen').click()
//         cy.get('#search-country-selection-country-select').click()
//         cy.get('#search-country-selection-item-0').click();
//         // cy.get('a').type('0').click()
//         // cy.contains('toggle-vsc-link')
//     })
// })


describe('Info Page', function() {
    it('Visits the VSC and selects a country', function() {
        cy.visit('https://service.post.ch/vsc/?lang=de')
        cy.get('#default-vsc-button').click()
        // select country belgium
        cy.get('#search-country-selection-country-select').select('Belgien')
        // verify the minimum prices for letters, small parcels and parcels
        cy.get('#sending-type-letter').contains('ab CHF 1.40')
        cy.get('#sending-type-parcel-small').contains('ab CHF 9.00')
        cy.get('#sending-type-parcel').contains('ab CHF 34.00')
        // choose format B5
        cy.get('#letterFormatSelect').select('bis B5 (17.6 x 25cm)')
        cy.get('#letterWeightSelect').select('bis 20 g')
        // click next
        cy.get('#next-step').click()
        cy.get('#arrivalTypeSelect').select('In 2 - 3 Werktagen  - CHF 1.50')
        cy.get('#signature-option').click()
        cy.get('#priorityplus-option').click()
        cy.get('#signature-option').click()
        cy.get('#signature-signature').should('be.checked')
        cy.get('#signature-person').should('not.to.be.checked')
        cy.get('#signature-deliveryadvice-label').should('not.to.be.checked')
        cy.get('#climate-option-label').should('not.to.be.checked')

    })
})

/* snippets */

// for (var i = 1; i < 50; i++) {
//     if(i % 2) {
//         cy.get('#signature-option').click()
//     } else {
//         cy.get('#priorityplus-option').click()
//     }
// }
