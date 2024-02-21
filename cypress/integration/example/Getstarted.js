describe('get started ', () => {
    it.only('get started for already created organization', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-13@gmail.com");
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
        cy.get('._linkActive_78bsv_59').click();
        cy.get(':nth-child(2) > .gs_card_body').click();
        cy.get('._linkActive_78bsv_59').click();
        cy.get(':nth-child(3) > .gs_card_body').click();
        cy.get('._linkActive_78bsv_59').click();
        cy.get(':nth-child(4) > .gs_card_body').click();
        cy.get('._linkActive_78bsv_59').click();
    });
    it('get started with creating organization ', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
         //for otp
         cy.get('[aria-label="Please enter OTP character 1"]').type("1");
         cy.get('[aria-label="Please enter OTP character 2"]').type("1");
         cy.get('[aria-label="Please enter OTP character 3"]').type("1");
         cy.get('[aria-label="Please enter OTP character 4"]').type("1");
         cy.get('[aria-label="Please enter OTP character 5"]').type("1");
         cy.get('[aria-label="Please enter OTP character 6"]').type("1"); 
        cy.get(".submitBtn").click();  
        cy.get("input[placeholder='Enter your Name']").type("gbcfdbx");
        cy.get("input[placeholder='Enter your Company Name']").type("sdtyio");
         cy.get('.q-onb-main-first > div:nth-of-type(3) [class=" css-19bb58m"]').click();
        cy.get('#react-select-2-option-0').click();
         cy.get(".q-onb-main-first div:nth-of-type(4) [class=' css-19bb58m']").click();
         cy.get('#react-select-3-option-0').click();
         cy.get(".q-onb-main-first div:nth-of-type(5) [class=' css-19bb58m']").click();
         cy.get('#react-select-4-option-4').click();
         cy.get(".q-onb-main-btn3").click();
         cy.get(':nth-child(1) > .gs_card_body').click();
         cy.get('._linkActive_78bsv_59').click();
         cy.get(':nth-child(2) > .gs_card_body').click();
         cy.get('._linkActive_78bsv_59').click();
         cy.get(':nth-child(3) > .gs_card_body').click();
         cy.get('._linkActive_78bsv_59').click();
         cy.get(':nth-child(4) > .gs_card_body').click();
         cy.get('._linkActive_78bsv_59').click();
    });
});