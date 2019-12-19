import { HelperFuncs } from "../support/helper_funcs"

const helper = new HelperFuncs

export class Discounts {

    selectDriverDiscounts() {
        helper.pageLocationCheck('#/discounts/discount_info/1')
        this.getDiscountContinueBtn().click()
    }

    getDiscountContinueBtn() {
        return cy.get('#discount_info_continue_button')
    }
}