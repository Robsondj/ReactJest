describe("when new participants is added", () => {
    beforeEach(() => {
        // url is on the cypress.json
        cy.visit("/");
    });

    it("Add several participants", () => {
        const participants = require("../../fixtures/participants.json");
        participants.forEach(participant => {
            cy.addParticipant(participant.name);
        });
        cy.get("ul li").should("have.length", participants.length);
    })


});