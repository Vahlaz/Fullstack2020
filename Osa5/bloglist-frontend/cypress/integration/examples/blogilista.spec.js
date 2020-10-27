const { func } = require('prop-types')

describe('blogi ', function () {
	beforeEach(function () {
		cy.request('POST', 'http://localhost:3001/api/testing/reset')
		const user = {
			name: 'homer simpsons',
			username: 'homerpoika',
			password: 'naura',
		}
		cy.request('POST', 'http://localhost:3001/api/users/', user)
		cy.visit('http://localhost:3000')
	})
	it('Login form is shown', function () {
		cy.contains('Login to application')
	})
	it('semi veli keissi', function () {
		cy.get('#username').type('lisa')
		cy.get('#password').type('ihaok')
		cy.get('#login-button').click()
		cy.contains('Login to application')
	})
	it('semi nais keissi', function () {
		cy.get('#username').type('homerpoika')
		cy.get('#password').type('naura')
		cy.get('#login-button').click()
		cy.contains('blogs')
	})
})

describe('when logged in', function () {
	beforeEach(function () {
		cy.visit('http://localhost:3000')
		cy.get('#username').type('homerpoika')
		cy.get('#password').type('naura')
		cy.get('#login-button').click()
		cy.contains('blogs')
	})
	it('User is logged in', function () {
		cy.contains('homer simpsons')
	})
	it('User can create blogs', function () {
		cy.get('#Add-button').click()
		cy.get('#title').type('ihaok')
		cy.get('#author').type('mutootko')
		cy.get('#url').type('kattonu')
		cy.get('#submit-button').click()
		cy.contains('mutootko')

		cy.get('#Add-button').click()
		cy.get('#title').type('himo')
		cy.get('#author').type('läski')
		cy.get('#url').type('homer')
		cy.get('#submit-button').click()
		cy.contains('himo')
	})
	it('User can like blogs', function () {
		cy.get('#show-button').click()
		cy.get('#like-button').click()
		cy.contains('likes: 1')
	})
	it('Blogs are sorted by likes', function () {
		cy.contains('himo').parent().find('button').click()
		cy.contains('homer')
			.parent()
			.find('button')
			.then((buttons) => {
				cy.wrap(buttons[0]).click().click()
			})
		cy.contains('himo')
		cy.contains('ihaok').parent().find('button').click()
		cy.get('.likes').then((response) => {
			const likes = response
				.toArray()
				.map((blogDiv) => blogDiv.innerText.replace(/[^/\d]/g, ''))
            expect(likes).equal(likes.sort())
		})
    })
    it('User can delete blog', function () {
        cy.contains('ihaok').parent().find('button').click()
        cy.contains('kattonu')
        .parent()
        .find('button')
        .then((buttons) => {
            cy.wrap(buttons[2]).click()
        })
    cy.contains('ihaok').should('not.exist')
 })
})
