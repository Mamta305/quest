describe('to go to switch tab and change flow', () => {
    //to go to switch tab
    it('to go to switch tab ', () => {
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
        //to go to switch button
        cy.get("._profileTitle_78bsv_111").click();
        cy.contains("div","Switch").click();
        //to change community
        cy.get('select').select('create_org');
        //for create new community
        cy.get(".btn").click();

    });
    //to change organization from switch tab
    it('to change organization', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
        cy.wait(50000);  
        cy.get(".submitBtn").click();
        //to go to switch button
        cy.get("._profileTitle_78bsv_111").click();
        cy.contains("div","Switch").click();
        //to change community choose community name
        cy.get('select').select('create_org');
        cy.get(".btn").click();
    });
    //to create new organixation fron switch tab
    it('to create new organization', () => {
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
        //to go to switch button
        cy.get("._profileTitle_78bsv_111").click();
        cy.contains("div","Switch").click();
        //to change community
        cy.get('select').select('create_org');
        cy.get(".btn").click();
        //to upload image
        cy.get(".q-input-container").click();
        cy.get('input[type="file"]').attachFile('/bird-cartoon.jpg', { subjectType: 'input' });
        //put name of organization
        cy.get("input[name='name']").type("Testxyz");
        cy.get("input[name='bio']").type("Testing of xyz");
        cy.get('select').select('GAMING');
        //to make org web 3 
        cy.get(':nth-child(5) > .ml-auto > .PaymentSwitch > .slider').click();
        cy.get(".q-btn-grape").click();
    });
    //to go to new created organization
    it('to change organization', () => {
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
        //to go to switch button
        cy.get("._profileTitle_78bsv_111").click();
        cy.contains("div","Switch").click();
        //to change community
        cy.get('select').select('Testxyz');
        cy.get(".btn").click();
        cy.contains("div","Successfully created the organization. Now redirecting to the admin page").should("be.visible");
        cy.log("created");
    });

});