Cypress.Commands.add("addParticipant", (participant) => {
    cy.get("input").type(participant);
    cy.contains("Adicionar").click();
});