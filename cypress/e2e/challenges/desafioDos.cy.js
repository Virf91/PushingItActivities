// Se debe generar una suite de pruebas
// para probar el modulo “To do list”.

// Funcionalidades a probar:
// Ingresar 5 tareas desde de un set de datos (debe ser un único test)
// Verificar que existan los botones “All”, “Completed”, “Active” y “Remove all”
// Agregar 2 tareas, completarlas y eliminar la segunda tarea completada
// Agregar 2 tareas y eliminar la primera tarea


// Se debe realizar un proyecto desde cero y entregar todo el proyecto en el drive (propio)  (no incluir la carpeta node modules)
// Debe haber un solo archivo de test donde estén incluidos todos los test en un describe
// Deben utilizar before y beforeEach hooks
// Los datos de entrada deben estar en un archivo json
// La url debe estar definida como baseUrl
// Deben utilizar xpath y CssSelector
// Username: pushingit – password 123456!

describe('ToDo list Test' , () => {
let datosDesafioDos;

before('', () => {
    cy.fixture("datosDesafioDos").then( data => {
        datosDesafioDos = data;
    })
})

beforeEach('', () => {
    cy.visit('');
    cy.get('#registertoggle').dblclick();
    cy.xpath('//input[@id="user"]').type(`pushingit`);
    cy.xpath('//input[@name="pass"]').type('123456!');
    cy.xpath('//button[@type="submit"]').click();
    cy.xpath('//a[contains(@id , "todo")]').click()

})
it('Ingresar 5 tareas desde de un set de datos', () =>{
    cy.get('#task').type(datosDesafioDos.task1);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.get('#task').type(datosDesafioDos.task2);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.get('#task').type(datosDesafioDos.task3);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.get('#task').type(datosDesafioDos.task4);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.get('#task').type(datosDesafioDos.task5);
    cy.xpath('//div//child::button[@type="submit"]').click();

})
it('Verificar que existan los botones “All”, “Completed”, “Active” y “Remove all”', () =>{
    cy.xpath('//button[@type="button"]').clic();
    cy.xpath('//button[@id="completed"]').clic();
    cy.xpath('//button[@id="active"]').clic();
    cy.xpath('//button[@id="removeAll"]').clic();
})
it('Agregar 2 tareas, completarlas y eliminar la segunda tarea completada', () =>{
    cy.get('#task').type(datosDesafioDos.task1);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.get('#task').type(datosDesafioDos.task2);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.xpath('//p[@id="5265"]').click();
    cy.path('//p[@id="8703"]').click();
    cy.get(':nth-child(2) > .css-vuy1kp > .chakra-button').clic();
})
it('Agregar 2 tareas y eliminar la primera tarea', () =>{
    cy.get('#task').type(datosDesafioDos.task3);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.get('#task').type(datosDesafioDos.task4);
    cy.xpath('//div//child::button[@type="submit"]').click();
    cy.get(':nth-child(1) > .css-vuy1kp > .chakra-button').click();
})
})
