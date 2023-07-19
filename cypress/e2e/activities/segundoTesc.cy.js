 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    let name = `comision${numero}`;
    it.skip('Actividad complementeria 1', () =>{
        cy.visit('');
        cy.get('#user').type(name);
        cy.get('#pass').type('123456!');
        cy.get('[value="Female"]').check({force: true});
        cy.get('#day').select("10");
        cy.get('#month').select("April");
        cy.get('#year').select(50);
        cy.get('#submitForm').click(); 

        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
    });

    it('User login', () =>{
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').dblclick();

    })
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos 
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia sesion'
