import { HelperFuncs } from "../support/helper_funcs";

const helper = new HelperFuncs();

export class CarMake {
    selectCar(year, make, model, trim) {
        this.getCarYear(year).click();
        this.getCarMake(make).click();
        this.getCarModel(model).click();
        this.getCarTrim(trim).click();
    }
    // get car_year with string param
    getCarYear(car_year) {
        cy.get(".tag-label").should("be.visible");
        return cy.get(".tt-dataset-car_year>div").contains(car_year);
    }
    // get car_make with string param
    getCarMake(car_make) {
        cy.get(".tag-label").should("be.visible");
        return cy.get(".car-sprite span").contains(car_make);
    }
    // get car_model with string param
    getCarModel(car_model) {
        cy.get(".tag-label").should("be.visible");
        return cy.get(".tt-dataset-model_year div").contains(car_model);
    }
    // get car_trim with string param
    getCarTrim(car_trim) {
        cy.get(".tag-label").should("be.visible");
        return cy.get(".tt-dataset-car_trim div").contains(car_trim);
    }
}
