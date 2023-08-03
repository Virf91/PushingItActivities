/// <reference types="cypress" />

describe("Actividad complementaria 3", () =>{

    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath('//span[@id="registertoggle"]').dblclick();
        cy.xpath('//input[@id="user"]').type(`pushingit`);
        cy.xpath('//input[@name="pass"]').type('123456!');
        cy.xpath('//button[@type="submit"]').click();
        cy.xpath('//a[contains(@id , "todo")]').click() // revisar si está ok
        cy.xpath('//input[starts-with(@name,"ta")]').type("tarea 1");
        cy.xpath('//button[text()="Send"]').click();
        cy.xpath('//p[text()="tarea 1"]').click();
    });
});

describe('Primer desafio cambiando css por xpath' , () => {
    const numero = Math.floor(Math.random() * 1000)
    let userName = `pushingit${numero}`;

    it ('Register', ()=>{
        cy.visit('');
        cy.xpath('//input[@name="user"]').type(userName); 
        cy.xpath('//input[@type="password"]').type('123456!');
        cy.xpath('//label//child::input[@value="Female"]').check({force: true});
        cy.xpath('//select[@name="day"]').select('20');
        cy.xpath('//select[@name="month"]').select('September');
        cy.xpath('//select[@name="year"]').select(10);
        cy.xpath('//button[@type="submit"]').click();
        cy.wait(6000);
        cy.xpath('//a[@id="todolistlink"]').click();
        cy.xpath('//div//child::input[@id="task"]').type('Retirar ropa de la lavandería');
        cy.xpath('//div//child::button[@type="submit"]').click();
        cy.xpath('//div//child::p[@class="chakra-text css-8atqhb"]').click();
    })

})