import { HelperFuncs } from "../support/helper_funcs";
const helper = new HelperFuncs();

export class CarDetail {
    enterCarDetails(purpose, distance, status, deductible) {
        this.getCarPurpose(purpose).click();
        this.getDistanceEachWay(distance).click();
        this.getCarPaymentStatus(status).click();
        this.getCarDeductible(deductible).click();
        this.getContinueBtn().click();
    }

    getCarPurpose(car_purpose) {
        cy.get("#car_details_vehicle_purpose_form_group label").should("be.visible");
        return cy.get(".absolute-checkbox span").contains(car_purpose);
    }

    getDistanceEachWay(distance_value) {
        cy.get("#car_usage_mileage_form_group>label").should("be.visible");
        return cy.get('label[data-field="mileage_per_day"]').contains(distance_value);
    }

    getCarPaymentStatus(payment_status) {
        cy.get("#car_ownership_status_form_group>label").should("be.visible");
        return cy.get(".payment-status").contains(payment_status);
    }

    getCarDeductible(car_deductible) {
        return cy.get('label[data-field="deductibles"]').contains(car_deductible);
    }

    getContinueBtn() {
        cy.get('button[id="car_details_continue_to_driver"]').should("be.visible");
        return cy.get('button[id="car_details_continue_to_driver"]');
    }
}
