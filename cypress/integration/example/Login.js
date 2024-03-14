describe('Quest login', () => {
    it('get login', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
        cy.get('.loginv3-right-btn').click();
        //for otp
        cy.get('[aria-label="Please enter OTP character 1"]').type("a");
        cy.get('[aria-label="Please enter OTP character 2"]').type("d");
        cy.get('[aria-label="Please enter OTP character 3"]').type("1");
        cy.get('[aria-label="Please enter OTP character 4"]').type("1");
        cy.get('[aria-label="Please enter OTP character 5"]').type("1");
        cy.get('[aria-label="Please enter OTP character 6"]').type("1");    
        cy.get(".submitBtn").click();  
    });
    it("login with email",()=>{
        cy.visit("https://staging.questlabs.ai/login/");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
        cy.get('.loginv3-right-btn').click();
        // cy.get('#clickbox > :nth-child(2) > div').type("123456");
        //for otp
        cy.get('[aria-label="Please enter OTP character 1"]').type("1");
        cy.get('[aria-label="Please enter OTP character 2"]').type("1");
        cy.get('[aria-label="Please enter OTP character 3"]').type("1");
        cy.get('[aria-label="Please enter OTP character 4"]').type("1");
        cy.get('[aria-label="Please enter OTP character 5"]').type("1");
        cy.get('[aria-label="Please enter OTP character 6"]').type("1");
        // cy.wait(30000);  
         cy.get(".submitBtn").click();  

    })
    it.only('create new org', () => {
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
        cy.get("input[placeholder='Enter your Name']").type("1123");
        cy.get("input[placeholder='Enter your Company Name']").type("testmt");
         cy.get('.q-onb-main-first > div:nth-of-type(3) [class=" css-19bb58m"]').click();
        cy.get('#react-select-2-option-0').click();
         cy.get(".q-onb-main-first div:nth-of-type(4) [class=' css-19bb58m']").click();
         cy.get('#react-select-3-option-0').click();
         cy.get(".q-onb-main-first div:nth-of-type(5) [class=' css-19bb58m']").click();
         cy.get('#react-select-4-option-4').click();
         cy.get(".q-onb-main-btn3").click();
    });
    it('create new org', () => {
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
        cy.get("input[placeholder='Enter your Name']").type("testwerry");
        cy.get("input[placeholder='Enter your Company Name']").type("testmt");
         cy.get('.q-onb-main-first > div:nth-of-type(3) [class=" css-19bb58m"]').click();
        cy.get('#react-select-2-option-0').click();
         cy.get(".q-onb-main-first div:nth-of-type(4) [class=' css-19bb58m']").click();
         cy.get('#react-select-3-option-0').click();
         cy.get(".q-onb-main-first div:nth-of-type(5) [class=' css-19bb58m']").click();
         cy.get('#react-select-4-option-4').click();
         cy.get(".q-onb-main-btn3").click();
    });
    it('trying with invalid email ', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user");
        cy.get('.loginv3-right-btn').click();
        cy.contains("div","Invalid email address Please check your email address").should('exist');
    });
    it('trying with invalid email ', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("123.com");
        cy.get('.loginv3-right-btn').click();
        cy.contains("div","Invalid email address Please check your email address").should('exist');
    });
});