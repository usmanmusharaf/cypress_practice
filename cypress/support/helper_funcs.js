export class HelperFuncs {

    // generic funtion: assert xhr request to load
    requestAssertion(requestMethod, requestUrl) {
        const xhrRequestTime = 60000
        const requestStatus = true;
        cy.server({
            method: 'POST',
            delay: 3000, // delays every request for 1500 for which the function will be called
        })
        cy.route({
            method: requestMethod,
            url: requestUrl
        }).as('requestAssertion')
        cy.wait('@requestAssertion', { timeout: xhrRequestTime }).then((_xhr) => {
            expect(requestStatus).to.be.true // to check request status
        })
    }

    pageLocationCheck(_path) {
        cy.location().should((loc) => {
            expect(loc.hash).to.eq(_path)
        })
    }
}