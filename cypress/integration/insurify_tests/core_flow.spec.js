import { HomePage } from "../../pages/homepage"
import { CarMake } from "../../pages/car_make"
import { HelperFuncs } from "../../support/helper_funcs"

describe('Complete happy flow', () => {

    // page objects
    const homepage = new HomePage
    const carmake = new CarMake
    const helper = new HelperFuncs

    beforeEach(function () {
        cy.visit('/')
        helper.requestAssertion('POST', '/api/users/static_user_pageview/')  // asserting user_pageview request
    })

    // core flow of application
    it('Fill in user preferences', () => {
        cy.title().should('include', 'Insurify®')
        homepage.enterZipcode('76365')
        helper.requestAssertion('PATCH', '/api/applicants/application/?product_type=auto') // asserting application patch request
        carmake.selectCar('2014', 'Honda', 'Civic', 'Hybrid')
    })

})