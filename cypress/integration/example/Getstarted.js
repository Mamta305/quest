describe('get started ', () => {
    it.only('get started for already created organization', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
        cy.get('.loginv3-right-btn').click();
        //for otp
        cy.get('[aria-label="Please enter OTP character 1"]').type("1");
        cy.get('[aria-label="Please enter OTP character 2"]').type("1");
        cy.get('[aria-label="Please enter OTP character 3"]').type("1");
        cy.get('[aria-label="Please enter OTP character 4"]').type("1");
        cy.get('[aria-label="Please enter OTP character 5"]').type("1");
        cy.get('[aria-label="Please enter OTP character 6"]').type("1"); 
        cy.get(".submitBtn").click();  
        cy.get(':nth-child(1) > .gs_card_body').click();
        cy.get('[href="/admin/get-started"]').click();
        cy.get(':nth-child(2) > .gs_card_body').click();
        cy.get('[href="/admin/get-started"]').click();
        cy.get(':nth-child(3) > .gs_card_body').click();
        cy.get('[href="/admin/get-started"]').click();
        cy.get(':nth-child(4) > .gs_card_body').click();
    });
});