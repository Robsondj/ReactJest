describe("form test group", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("when input is empty, new participants can not be added", () => {

        cy.get("input").should("have.attr", "placeholder", "Insira os nomes dos participantes");

        cy.get("button").should("have.attr", "disabled");
    });

    it("add participant in case of fill the input", () => {
        cy.addParticipant("Robson");
        cy.get("[placeholder='Insira os nomes dos participantes']").should("be.empty");
        cy.get("[placeholder='Insira os nomes dos participantes']").should("be.focused");
    });

    it("duplicated names can not be added to the list", () => {
        cy.addParticipant("Robson");
        cy.addParticipant("Robson");
        cy.get("[role='alert']").contains("Nomes duplicados não são permitidos!").should("be.visible");
    });

    it("the error message must disappear after a time", () => {
        cy.addParticipant("Robson");
        cy.addParticipant("Robson");
        cy.wait(5000);
        cy.contains("Nomes duplicados não são permitidos!").should("not.exist");
    });
})