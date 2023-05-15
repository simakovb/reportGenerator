describe('expense viewer test', () => {
    it('visits the root', () => {
    cy.visit('/');
    });
    it('clicks the menu button viewer option', () => {
    cy.get('mat-icon').click();
    cy.contains('a', 'viewer').click();
    });
    it('selects an Employee', () => {
    cy.wait(500);
    cy.get('mat-select[formcontrolname="employeeid"]').click();
    cy.contains('Smartypants').click();
    });
    it('selects a Report', () => {
    cy.wait(500);
    cy.get('mat-select[formcontrolname="reportid"]').click();
    cy.contains('2022').click();
    });
    it('confirms there is a Total', () => {
    cy.contains('Total');
    });
   });