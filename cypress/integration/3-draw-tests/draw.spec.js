describe("when new participants is added", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("when input is empty, new participants can not be added", () => {

        cy.get("input").should("have.attr", "placeholder", "Insira os nomes dos participantes");

        cy.get("button").should("have.attr", "disabled");
    });

    it("Add participant in case of fill the input", () => {

        cy.addParticipant("Robson");

        cy.get("input").should("be.empty");

    });

    it("Add several participants", () => {
        const participants = require("../../fixtures/participants.json");
        participants.forEach(participant => {
            cy.addParticipant(participant.name);
        });
        cy.get("ul li").should("have.length", participants.length);
    })


});