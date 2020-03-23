import { HelperFuncs } from "../support/helper_funcs";

const helper = new HelperFuncs();

export class Discounts {
    selectDriverDiscounts() {
        this.getDiscountContinueBtn().click();
    }

    getDiscountContinueBtn() {
        return cy.get("#discount_info_continue_button");
    }
}
