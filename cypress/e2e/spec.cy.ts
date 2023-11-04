describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
  })
})

describe('盤面操作', () => {
  it('X が勝利する', () =>{
    cy.visit('http://localhost:3000');

    cy.get('[data-e2e=square]').eq(0).click();
    cy.get('[data-e2e=square]').eq(1).click();
    cy.get('[data-e2e=square]').eq(3).click();
    cy.get('[data-e2e=square]').eq(2).click();
    cy.get('[data-e2e=square]').eq(6).click();

    cy.get('.status').contains('Winner: X')
  });

  it('引き分け時に"Draw..."が表示される', () =>{
    cy.visit('http://localhost:3000');

    cy.get('[data-e2e=square]').eq(0).click();
    cy.get('[data-e2e=square]').eq(1).click();
    cy.get('[data-e2e=square]').eq(2).click();
    cy.get('[data-e2e=square]').eq(3).click();
    cy.get('[data-e2e=square]').eq(6).click();
    cy.get('[data-e2e=square]').eq(4).click();
    cy.get('[data-e2e=square]').eq(5).click();
    cy.get('[data-e2e=square]').eq(8).click();
    cy.get('[data-e2e=square]').eq(7).click();

    cy.get('.status').contains('Draw...')
  });
})