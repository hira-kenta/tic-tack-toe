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

    cy.get('[data-e2e=status]').should('have.text','Winner: X')
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

    cy.get('[data-e2e=status]').should('have.text','Draw...');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Oが勝利する場合', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click();
    cy.get('.game-board > :nth-child(2) > :nth-child(2)').click();
    cy.get('.game-board > :nth-child(2) > :nth-child(3)').click();
    cy.get(':nth-child(3) > :nth-child(2)').click();
    cy.get('.game-board > :nth-child(3) > :nth-child(1)').click();
    cy.get(':nth-child(4) > :nth-child(2)').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.game-info').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.game-info').click();
    /* ==== End Cypress Studio ==== */
    // add 
    cy.get('[data-e2e=status]').should('have.text', 'Winner: O')
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('SortButtonで履歴を降順にする', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click();
    cy.get(':nth-child(3) > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(3)').click();
    cy.get(':nth-child(3) > :nth-child(3)').click();
    cy.get('.game-board > :nth-child(2) > :nth-child(3)').click();
    cy.get('.sortButton').click();
    /* ==== End Cypress Studio ==== */
    // add
    cy.get('[data-e2e=sortButton]').should('have.text', 'DESC');
    cy.get('[data-e2e=histories] > :nth-child(6)').should('have.text', 'Go to game start');
  });
})