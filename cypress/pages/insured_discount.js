export class InsuredDiscount {

    selectPriorInsurance() {

    }

    getSurveyExperimentOption() {
        return cy.get('label[data-analytics-label="first_time_insurer"]')
    }

    getInsuredStatus(insured_status) {
        return cy.get('#driver_info_is_currently_insured_container').contains(insured_status)
    }
}