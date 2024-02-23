
describe('Quest login', () => {
    it('get login', () => {
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
    });
    it("login with gmail",()=>{
        cy.visit("https://staging.questlabs.ai/login");
        cy.get('a > .loginv3-right-google').click();

    })
    it.only("login with email",()=>{
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
});