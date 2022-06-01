Cypress.Commands.add("addParticipant", (participant) => {
    cy.get("[placeholder='Insira os nomes dos participantes']").type(participant);
    cy.contains("Adicionar").click();
});