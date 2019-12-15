import { HomePage } from "../../pages/homepage"
import { CarMake } from "../../pages/car_make"
import { HelperFuncs } from "../../support/helper_funcs"
import { CarDetail } from "../../pages/car_detail"

describe('Complete happy flow', () => {

    // page objects
    const homepage = new HomePage
    const carMake = new CarMake
    const helper = new HelperFuncs
    const carDetail = new CarDetail

    // core flow of application
    it('Fill in user preferences', () => {
        cy.visit('/', {
            onLoad: () => {
                console.log('Page Loading Complete')
            }
        }).then(() => {
            cy.title().should('include', 'Insurify®')
            homepage.enterZipcode('76365')
            helper.requestAssertion('PATCH', '/api/applicants/application/?product_type=auto') // asserting application patch request
            carMake.selectCar('2014', 'Honda', 'Civic', 'Hybrid')
            carDetail.enterCarDetails('Commute to school', '10', 'Paid in full', 'No Coverage')
        })

    })

})