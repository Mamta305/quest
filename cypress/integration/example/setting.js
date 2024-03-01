describe('To test the setting page', () => {
    it('To open the setting page', () => {
        //to login into the quest app
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-2@gmail.com");
        cy.get('.loginv3-right-btn').click();
        //for otp
        cy.get('[aria-label="Please enter OTP character 1"]').type("1");
        cy.get('[aria-label="Please enter OTP character 2"]').type("1");
        cy.get('[aria-label="Please enter OTP character 3"]').type("1");
        cy.get('[aria-label="Please enter OTP character 4"]').type("1");
        cy.get('[aria-label="Please enter OTP character 5"]').type("1");
        cy.get('[aria-label="Please enter OTP character 6"]').type("1");  
        cy.get(".submitBtn").click();
        //to click on seting page
        cy.get('[href="/admin/settings"]').click();
    });
    //to edit or update the organizations details
    it('To edit or update the organizations details on setting page', () => {
        //to login into the quest app
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-2@gmail.com");
        cy.get('.loginv3-right-btn').click();
        //for otp
        cy.get('[aria-label="Please enter OTP character 1"]').type("1");
        cy.get('[aria-label="Please enter OTP character 2"]').type("1");
        cy.get('[aria-label="Please enter OTP character 3"]').type("1");
        cy.get('[aria-label="Please enter OTP character 4"]').type("1");
        cy.get('[aria-label="Please enter OTP character 5"]').type("1");
        cy.get('[aria-label="Please enter OTP character 6"]').type("1");   
        cy.get(".submitBtn").click();
        //to click on seting page
        cy.get('[href="/admin/settings"]').click();
        cy.get("#cover-img").click();
        cy.get('input[type="file"]').attachFile('/sunset.jpg', { subjectType: 'input' });
        //to click on organization name and remove 
        cy.get(".col-12.col-md-6.mb-3.pr-md-2.px-0 > input[name='name']").clear();
        //to update new name of organization
        cy.get(".col-12.col-md-6.mb-3.pr-md-2.px-0 > input[name='name']").type("QuestTest");
        //to click on bio and remove
        cy.get("input[name='bio']").clear();
        //to update new name of bio
        cy.get("input[name='bio']").type("Testing of quest app with cypress");
        //to uplaod website of organization
        cy.get('.col-md-12 > .q-button-sm').type("www.goggle.com");
        //to click on button
        cy.get(".btn").click();
        cy.on('window:alert', (str) => {
            expect(str).to.include('saved'); 
            // Change 'saved' to the expected alert message
          });
        
    });
    //to add admins or manage admins
    it('to add admins or manage admins', () => {
        //to login into the quest app
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-2@gmail.com");
        cy.get('.loginv3-right-btn').click();
        //for otp
        cy.get('[aria-label="Please enter OTP character 1"]').type("1");
        cy.get('[aria-label="Please enter OTP character 2"]').type("1");
        cy.get('[aria-label="Please enter OTP character 3"]').type("1");
        cy.get('[aria-label="Please enter OTP character 4"]').type("1");
        cy.get('[aria-label="Please enter OTP character 5"]').type("1");
        cy.get('[aria-label="Please enter OTP character 6"]').type("1");    
        cy.get(".submitBtn").click();
        //to click on seting page
        cy.get('[href="/admin/settings"]').click();
        //to refer to manage admins page
        cy.contains("div","Manage Admins").click();
        //invite members button
        cy.contains("div","Invite Team Member").click();
        //to enter name of admin
        cy.get("input[placeholder='Enter name']").type("Mamta");
        //to add email of admin
        cy.get("input[placeholder='Enter email id']").type("mahithakur47363@gmail.com");
        //to click on save button
        cy.get(".btn").click();
        //Checking the window alert text
cy.on('window:alert',(txt)=>{
//Assertion
expect(txt).to.contains('Congratulations!!!');
console.log(txt);

})
//invite 2 members button
cy.contains("div","Invite Team Member").click();
//to enter name of admin
cy.get("input[placeholder='Enter name']").type("MT");
//to add email of admin
cy.get("input[placeholder='Enter email id']").type("mahithakur4763@gmail.com");
//to click on save button
cy.get(".btn").click();
//Checking the window alert text
cy.on('window:alert',(txt)=>{
//Assertion
expect(txt).to.contains('Congratulations!!!');
console.log(txt);

})
//invite 3 members button
cy.contains("div","Invite Team Member").click();
//to enter name of admin
cy.get("input[placeholder='Enter name']").type("Jay");
//to add email of admin
cy.get("input[placeholder='Enter email id']").type("jay02@gmail.com");
//to click on save button
cy.get(".btn").click();
//Checking the window alert text
cy.on('window:alert',(txt)=>{
//Assertion
expect(txt).to.contains('Congratulations!!!');
console.log(txt);
})
    });
    //to search and delete admin
    it('to search  admins and delete admins', () => {
        //to login into the quest app
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
        //to click on seting page
        cy.get('[href="/admin/settings"]').click();
        //to refer to manage admins page
        cy.contains("div","Manage Admins").click();
        //for searching admin
 cy.get("input[placeholder='Search here...']").type("M");
 cy.get('.aud-table').contains('td', 'Mamta').should('exist');
 console.log("find");
 cy.get(':nth-child(2) > .text-right > .cursor-pointer').click();
 //cy.get('.Toastify__toast-body', { timeout: 5000 }).should('be.visible');
 cy.get('.Toastify__toast-body', { timeout: 10000 }).should('exist').contains('Admin has been removed successfully.');
// Check if the toast contains the expected message
//cy.contains('.Toastify__toast-body', 'Admin has been removed successfully.').should('be.visible');
cy.log("present");
    })
    //for plan and priicng page
    it('to refer to to plan and pricing page', () => {
        //to login into the quest app
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
        //to click on seting page
        cy.get('[href="/admin/settings"]').click();
        //to refer to plans and pricing page
        cy.contains("div","Plans & Pricing").click();
        cy.get('div:contains("Starter Plan")').should('exist').should('contain.text', 'Starter Plan');


    }); 
    //to refer to brand theme page
    it('to refer to brand theme page', () => {
        //to login into the quest app
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
        //to click on seting page
        cy.get('[href="/admin/settings"]').click();
        //to refer to brand theme page
        cy.contains("div","Brand Theme").click();
        //to click on save  button
        cy.contains("button","Save").click();
        //to check the alert
        // cy.get('.Toastify__toast-body', { timeout: 20000 }).should('exist').contains('Admin has been removed successfully.');
        //after adding theme it should be on same page
        // cy.get('input[placeholder="Enter HEX code")').should('exist');
    }); 
    //to refer to inetegration page
    it('to refer to integration page', () => {
        //to login into the quest app
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
        //to click on seting page
        cy.get('[href="/admin/settings"]').click();
        //to refer to integration page
        cy.contains("div","Integrations").click();
        //to connect segmnet integration
        cy.get(':nth-child(3) > .integration-card > .integration-card-button-div > .integration-card-connect').click();
        //to fill the value of key 
        cy.get('._contentDiv_vtw95_29 > :nth-child(5)').type("asdg156");
        cy.get('._qSaveButton_vtw95_109').click();
       //to check the alert 
    //    cy.get("#/31 ", { timeout: 20000 }).should('exist').contains('Connected to Segment successfully.');
        // cy.log("Connected");
    }); 


});