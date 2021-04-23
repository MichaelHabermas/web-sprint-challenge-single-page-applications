describe('Testing the sprint challenge app', () => {
	// DRY helpers
	const nameInput = () => cy.get('input[name="name"]');
	const specialInstructionsInput = () => cy.get('input[name="specialInstructions"]');
	const sizeDropdownMenu = () => cy.get('#size-dropdown');
	const garlicRanchRadio = () => cy.get('input[value="GarlicRanch"]');
	const pepperoniCheckbox = () => cy.get('input[name="pepperoni"]');
	const grilledChickenCheckbox = () => cy.get('input[name="grilledChicken"]');
	const pineappleCheckbox = () => cy.get('input[name="pineapple"]');
	const orderButton = () => cy.get('#order-button');

	beforeEach(() => {
		cy.visit('http://localhost:3003/pizza');
	});

	// TEST 1
	it('Sanity test to make sure the tests run and work', () => {
		expect(1 + 2).to.equal(3);
		// expect(1 + 2).to.equal(4);
		expect(1 + 2).not.to.equal(4);
	});

	// TEST 2
	it('Check input existences', () => {
		nameInput().should('exist');
		specialInstructionsInput().should('exist');
		sizeDropdownMenu().should('exist');
		pepperoniCheckbox().should('exist');
		grilledChickenCheckbox().should('exist');
		pineappleCheckbox().should('exist');
		garlicRanchRadio().should('exist');
		orderButton().should('exist');
	});

	// TEST 3: fill in fields and submit
	it('Fill in text fields and test', () => {
		nameInput().should('have.value', '').type('Michael').should('have.value', 'Michael');
		specialInstructionsInput().should('have.value', '').type('Half Cheese').should('have.value', 'Half Cheese');
		// emailInput().should('have.value', '').type('habermoose@aol.com').should('have.value', 'habermoose@aol.com');
		// passwordInput().should('have.value', '').type('qwertyuiop').should('have.value', 'qwertyuiop');
		garlicRanchRadio().should('not.be.checked').click().should('be.checked');
		pepperoniCheckbox().should('not.be.checked').click().should('be.checked');
		grilledChickenCheckbox().should('not.be.checked').click().should('be.checked');
		pineappleCheckbox().should('not.be.checked').click().should('be.checked');
		// tosCheckbox().should('not.be.checked').check().should('be.checked');
		orderButton().click();
	});
});
