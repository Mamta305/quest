describe('Audiemce page', () => {
    it('To click on audience page', () => {
        //To login into quest app
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
        //to click on audience page
        cy.contains("div","Audience").click();
    });
    it('to see user table', () => {
        //To login into quest app
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
        //to click on audience page
        cy.contains("div","Audience").click();
        //assertion to  
        cy.get('.flex > span').should('exist').should('be.visible');
    });
    it('to see user and copy email', () => {
        //To login into quest app
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
        //to click on audience page
        cy.contains("div","Audience").click();
        //to copy email
        cy.contains("span","Mamta").click();
    });
    it('to go to new page view all', () => {
        //To login into quest app
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
        //to click on audience page
        cy.contains("div","Audience").click();
        //to go to view button 
        cy.contains("p","View all").click();
    });
    // it('to go to new page view all and adding new member', () => {
    //     //To login into quest app
    //     cy.visit("https://staging.questlabs.ai/login");
    //     cy.get("input[placeholder='example@gmail.com']").click();
    //     cy.get("input[placeholder='example@gmail.com']").type("quest-user-2@gmail.com");
    //     cy.get('.loginv3-right-btn').click();
    //     //for otp
    //     cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 6"]').type("1");   
    //     cy.get(".submitBtn").click(); 
    //     //to click on audience page
    //     cy.contains("div","Audience").click();
    //     //to go to view button 
    //     cy.contains("p","View all").click();
    //     //for add member
    //     // cy.get('.dropdown-trigger').invoke('mouseover');
    //     cy.get('dropdown-container').then($element => {
    //         const element = $element[0];
    //         const event = new MouseEvent('mouseover', {
    //           bubbles: true,
    //           cancelable: true,
    //           view: window
    //         });
    //         element.dispatchEvent(event);
    //       });
    //     cy.get('.dropdown-content').should('visible');
    //     cy.contains("p","Add member").click({ force: true });
    //     cy.get("input[placeholder='Enter Name']").type("Mamta");
    //     cy.get("input[placeholder='Enter email address']").type("quest-user-123@gmail.com");
    //     // cy.get("input[placeholder='Enter ETH address']").type("etqawe3456");
    //     cy.contains("div","Save").click();
    //     cy.contains("div","Member Added The member has been successfully added.").should('be.visible');
    // });
    // it('to go to new page view all and adding tag', () => {
    //     //To login into quest app
    //     cy.visit("https://staging.questlabs.ai/login");
    //     cy.get("input[placeholder='example@gmail.com']").click();
    //     cy.get("input[placeholder='example@gmail.com']").type("quest-user-2@gmail.com");
    //     cy.get('.loginv3-right-btn').click();
    //     //for otp
    //     cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    //     cy.get('[aria-label="Please enter OTP character 6"]').type("1");  
    //     cy.get(".submitBtn").click(); 
    //     //to click on audience page
    //     cy.contains("div","Audience").click();
    //     //to go to view button 
    //     cy.contains("p","View all").click();
    //     //for adding tag
    //     cy.get(".dropdown-trigger").click();
    //     cy.contains("p","Add tag").click();
    //     cy.get(".tag-textbox").type("test");
    //     cy.contains("div"," Save Tag").click();
    //     cy.contains("div","Congratulations!!! Your Tag has been successfully Created.").should('be.visible');
    // });
    it.only('to go to new page view all and searching member', () => {
        //To login into quest app
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
        // //to go to switch button
        // cy.get("._profileTitle_78bsv_111").click();
        //to click on audience page
        cy.contains("div","Audience").click();
        //to go to view button 
        cy.contains("p","View all").click();
        //for searching existing member
        cy.get('.campaignTemplate-searchbox-btn').click();
        cy.get('.px-2').type("ma");
        cy.contains("span","Mamta").should("exist");
        cy.log("present");
        cy.get(".css-8mmkcg").click();
    });

});
