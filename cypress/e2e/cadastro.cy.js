describe('Funcionalidades da Tela de Cadastro', () => {

    beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/cadastro.html')
  })

  it('Deve verificar se os elementos principais estão na tela', () => {
    cy.get('h1').should('contain', 'Crie sua Conta')
    cy.get('#form-cadastro').should('be.visible')
  })

  it('Deve alternar a visibilidade da senha (Eye Icon)', () => {

    cy.get('#senha').should('have.attr', 'type', 'password')

    cy.get('#togglePassword').click()
  
    cy.get('#senha').should('have.attr', 'type', 'text')

    cy.get('#togglePassword').click()
    cy.get('#senha').should('have.attr', 'type', 'password')
  })

  it('Deve validar o formulário antes de enviar', () => {
    cy.get('.btn-acesso').click()
    
    cy.url().should('include', 'cadastro.html')
  })

  it('Deve preencher o formulário e simular sucesso', () => {
    cy.get('#nome').type('Felipe Brito')
    cy.get('#email').type('felipe@instituicao.edu.br')
    cy.get('#senha').type('Senha@123') 

    cy.get('.btn-acesso').click()

    cy.get('.swal2-popup').should('be.visible')
    cy.get('.swal2-title').should('contain', 'Cadastro realizado com sucesso')
  })
})