// //crea un fixture con las siguientes keys 
// //username (el username debe ser inexistente)
// //pasword (la password debe ser valida) //123456!
// //mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found

// //usa before para acceder al fixture y obtener los datos
// //beforeEach para visitar la pagina y dirigirse al login

// /// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    let datosActividad4;

    before('', () => {                             
        cy.fixture("datosActividad4").then( data => {  //inicializa el fixture
        datosActividad4 = data;
        }) 
    })
    beforeEach('', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        
    })
it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        
        cy.get('#user').type(datosActividad4.username);
        cy.get('#pass').type(datosActividad4.password);
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datosActividad4.mensajeError)
        });



    })
    
    



