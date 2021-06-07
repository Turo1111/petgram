/* global describe, it, cy */ 

describe('Petgram', function () {
  it('para ver si la app funciona', function () {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
})