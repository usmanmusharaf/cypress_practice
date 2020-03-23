import { HelperFuncs } from "../support/helper_funcs";
const helper = new HelperFuncs();

export class DriverInfo {
    enterDriverDetails(f_name, l_name, dob, gender, credit, education) {
        cy.get('input[name="first_name"]').type(f_name);
        cy.get('input[name="last_name"]').type(l_name);
        cy.get("#driver_info_dob").type(dob);
        this.getDriverGender(gender).click();
        this.getDriverCredit(credit).click();
        this.getDriverEducaitonLevel(education).click();
        cy.get("#driver_info_continue_btn").click();
    }

    // function to get Driver's Gender locator
    getDriverGender(driver_gender) {
        return cy.get('label[data-field="gender"]').contains(driver_gender);
    }

    getDriverCredit(driver_credit) {
        return cy.get("#driver_info_credit_score_container>label").contains(driver_credit);
    }

    getDriverEducaitonLevel(driver_education) {
        return cy.get('label[data-field="education"]').contains(driver_education);
    }
}
