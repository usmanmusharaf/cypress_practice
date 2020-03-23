
export class HomePage {
    // to enter zipcode
    enterZipcode(zipcode) {
        cy.get('#main-auto-zipcode-form #zipcode_input').clear().type('76365')
        cy.get('#main-auto-zipcode-button').click()
    }
}
