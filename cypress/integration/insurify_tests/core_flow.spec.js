import { HomePage } from "../../pages/homepage"
import { CarMake } from "../../pages/car_make"
import { HelperFuncs } from "../../support/helper_funcs"
import { CarDetail } from "../../pages/car_detail"
import { DriverInfo } from "../../pages/driver_info"
import { Discounts } from "../../pages/discounts"
import { InsuredDiscount } from "../../pages/insured_discount"

describe('Complete happy flow', () => {

    // page objects
    const homepage = new HomePage
    const carMake = new CarMake
    const carDetail = new CarDetail
    const driverInfo = new DriverInfo
    const discount = new Discounts
    const insured = new InsuredDiscount

    beforeEach(function () {
        cy.server()
        // routing homepage /pageview request as pageview
        cy.route('POST', '/api/users/static_user_pageview/').as('pageview')
        cy.visit('/')
        // waiting for homepage /pageview request to complete before moving ahead
        cy.wait('@pageview', { timeout: 30000 }).its('status').should('eq', 200)
    })

    // core flow of application
    it('Fill in user preferences', () => {
        cy.title()// asserting page title
            .should('include', 'Insurify®')

        // routing application api as applicationApi
        cy.route('PATCH', '/api/applicants/application/?product_type=auto')
            .as('applicationApi')

        homepage.enterZipcode('76365') // function enters zipcode and clicks on zipcode button

        // waiting for application api request to ensure application is created
        cy.wait('@applicationApi', { timeout: 30000 })
            .its('status')
            .should('eq', 200)

        carMake.selectCar('2014', 'Honda', 'Civic', 'Hybrid')
        carDetail.enterCarDetails('Commute to school', '10', 'Paid in full', 'No Coverage')
        driverInfo.enterDriverDetails('Carmine', 'Falcone', '8888', 'Male', 'Good', 'Bachelor\'s')
        discount.selectDriverDiscounts()
        insured.selectPriorInsurance()

    })

})