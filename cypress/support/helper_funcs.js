export class HelperFuncs {

    // generic funtion: assert pageview xhr request to load
    requestAssertion(requestMethod, requestUrl) {
        const xhrRequestTime = 60000
        const requestStatus = true;
        cy.server()
        cy.route({
            method: requestMethod,
            url: requestUrl
        }).as('requestAssertion')
        cy.wait('@requestAssertion', { timeout: xhrRequestTime }).then((xhr) => {
            expect(requestStatus).to.be.true
        })
    }
}