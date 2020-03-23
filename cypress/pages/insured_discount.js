export class InsuredDiscount {
    selectPriorInsurance() {
        this.getInsuredStatus("Yes I have car insurance").click();
        this.getPriorInsuranceCarrier("Other").click();
        this.getExpiredDate("February, 2020").click();
    }

    getSurveyExperimentOption() {
        return cy.get('label[data-analytics-label="first_time_insurer"]');
    }

    getInsuredStatus(insured_status) {
        return cy.get("#driver_info_is_currently_insured_container").contains(insured_status);
    }

    getPriorInsuranceCarrier(carrier_name) {
        return cy.get(".tt-dataset-carrier span").contains(carrier_name);
    }

    getExpiredDate(expire_date) {
        return cy.get(".tt-selectable").contains(expire_date);
    }
}
