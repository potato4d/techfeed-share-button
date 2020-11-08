beforeEach(() => {
  cy.server()
})

describe('techfeed-button', () => {
  describe('When given unsafe prop', () => {
    it('should skip render', () => {
      cy.visit('/')
      cy.get('#xss-element').shadow().find('a').should('not.have.attr', 'html')
    })
  })

  describe('When given valid', () => {
    it('should render component', () => {
      cy.visit('/')
      cy.get('#valid-element')
        .shadow()
        .find('a')
        .should(
          'have.attr',
          'href',
          'https://techfeed.io/intent/share?url=https%3A%2F%2Fexample.com'
        )
    })
  })

  describe('When change url from blank to valid url', () => {
    it('should render component', () => {
      cy.visit('/')
      cy.wait(300)
      cy.get('#blank-element')
        .shadow()
        .find('a')
        .should('not.have.attr', 'href', '')
      cy.wait(300)
      cy.get('#blank-element').invoke('attr', 'url', 'https://example.net')
      cy.get('#blank-code').invoke('html', 'https://example.net')
      cy.wait(300)
      cy.get('#blank-element')
        .shadow()
        .find('a')
        .should(
          'have.attr',
          'href',
          'https://techfeed.io/intent/share?url=https%3A%2F%2Fexample.net'
        )
    })
  })

  describe('When change url from blank to unsafe url', () => {
    it('should skip render', () => {
      cy.visit('/')
      cy.wait(300)
      cy.get('#blank-element')
        .shadow()
        .find('a')
        .should('not.have.attr', 'href', '')
      cy.wait(300)
      cy.get('#blank-element').invoke('attr', 'url', 'javascript:alert(1)')
      cy.get('#blank-code').invoke('html', 'javascript:alert(1)')
      cy.wait(300)
      cy.get('#blank-element')
        .shadow()
        .find('a')
        .should('not.have.attr', 'html')
    })
  })
})
