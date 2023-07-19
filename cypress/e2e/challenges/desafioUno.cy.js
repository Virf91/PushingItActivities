// DESAFÍO NUMERO 1


/// <reference types="Cypress" />

describe('Primer desafo' , () => {
    const numero = Math.floor(Math.random() * 1000)
    let userName = `pushingit${numero}`;

    it ('Register', ()=>{
        cy.visit('');
        cy.get('[id="user"]').type(userName); 
        cy.get('input[id="pass"]').type('123456!');
        cy.get('[value="Female"]').check({force: true});
        cy.get('[name*="day"]').select('20');
        cy.get('[name^="month"]').select('September');
        cy.get('[name^="ye"]').select(10);
        cy.get('[type$="mit"]').click();
        cy.wait(6000);
        cy.get('#todolistlink').click();
        cy.get('#task').type('Retirar ropa de la lavandería');
        cy.get('button[type="submit"]').click();
        cy.contains('p', "Retirar").click();
    })

})

