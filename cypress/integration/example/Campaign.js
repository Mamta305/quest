describe('for referring to campaign flow', () => {

    it('for campaign page dashboard', () => {
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
        cy.get("._linkActive_78bsv_59").click();
    });
    //for searching specific template 
    it('for searching specific template', () => {
        //to visit the quest app
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        //provide your email in place of taneye2059@wentcity.com
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
        //after login button it waits for 5 min paste your otp manually
        //for otp
        cy.get('[aria-label="Please enter OTP character 1"]').type("1");
        cy.get('[aria-label="Please enter OTP character 2"]').type("1");
        cy.get('[aria-label="Please enter OTP character 3"]').type("1");
        cy.get('[aria-label="Please enter OTP character 4"]').type("1");
        cy.get('[aria-label="Please enter OTP character 5"]').type("1");
        cy.get('[aria-label="Please enter OTP character 6"]').type("1");   
        cy.get(".submitBtn").click(); 
        //redirects to campaign page 
        cy.get('[href="/admin/campaigns"]').click();
        cy.get("input[placeholder='Search']").click();
        // search specific campaign template like inline feedback
        cy.get("input[placeholder='Search']").type("inl");
        cy.get(".playgroundTemplate-card").click();
 });
 //for copy code 
 it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
    //after login button it waits for 5 min paste your otp manually
    //for otp
    cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    cy.get('[aria-label="Please enter OTP character 6"]').type("1");   
    cy.get(".submitBtn").click(); 
    //redirects to campaign page 
    cy.get('[href="/admin/campaigns"]').click();
    cy.get("input[placeholder='Search']").click();
    // search specific campaign template like inline feedback
    cy.get("input[placeholder='Search']").type("inl");
    //for selecting inline template
    cy.get(".playgroundTemplate-card").click();
    cy.get(".copyImage").click();
});
//for publish campaign
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
    cy.get('.loginv3-right-btn').click();
    //after login button it waits for 5 min paste your otp manually
    //for otp
    cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    cy.get('[aria-label="Please enter OTP character 6"]').type("1");   
    cy.get(".submitBtn").click(); 
    //redirects to campaign page 
    cy.get('[href="/admin/campaigns"]').click();
    cy.get("input[placeholder='Search']").click();
    // search specific campaign template like inline feedback
    cy.get("input[placeholder='Search']").type("inl");
    //for selecting inline template
    cy.get(".playgroundTemplate-card").click();
    //to copy the code
    cy.get(".copyImage").click();
    //to publish campaigns
    cy.contains('button', 'Publish').click();
});
//for creating campaigns for already present campaigns on dashboard
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
    //after login button it waits for 5 min paste your otp manually
    //for otp
    cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    cy.get('[aria-label="Please enter OTP character 6"]').type("1");   
    cy.get(".submitBtn").click(); 
    //redirects to campaign page 
    cy.get('[href="/admin/campaigns"]').click();
    //for create now button
    cy.get(".adminCampaign-topbtn-btns").click();
    //for selecting onboarding multi page quiz
    cy.contains('p', 'Onboarding Quiz - Multi page').click();
    //for publish  button
    cy.contains('button', 'Publish').click();
});
//for edit field in campaign
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
    //after login button it waits for 5 min paste your otp manually
    //for otp
    cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    cy.get('[aria-label="Please enter OTP character 6"]').type("1");  
    cy.get(".submitBtn").click(); 
    //redirects to campaign page 
    cy.get('[href="/admin/campaigns"]').click();
    //for create now button
    cy.get(".adminCampaign-topbtn-btns").click();
    //for selecting onboarding multi page quiz
    cy.contains('p', 'Onboarding Quiz - Multi page').click();
    //for edit button
    cy.contains('button',"Edit").click();
    //name of camopaign
    cy.get("input[placeholder='eg. Most Loyal Member']").clear();
    cy.get("input[placeholder='eg. Most Loyal Member']").type("test multi");
    // description of campaign
    cy.get("#basicform-textarea").clear();
    cy.get("#basicform-textarea").type("Multi page page");
    //continue button
    cy.contains('button',"Continue").click();
    //for adding action 
    cy.contains('div',"Add an Action").click();
    //forr adding link
    cy.contains('div',"Link").click();
    //enter link tiitle
    cy.get("input[placeholder='Enter Link Title']").type("quest app");
    //enter post link
    cy.get("input[placeholder='Enter Post Link']").type("https://app.questapp.xyz/login");
    cy.contains('div',"Save action").click();
});
//for user input in add action 
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
    //after login button it waits for 5 min paste your otp manually
    //for otp
    cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    cy.get('[aria-label="Please enter OTP character 6"]').type("1");  
    cy.get(".submitBtn").click(); 
    //redirects to campaign page 
    cy.get('[href="/admin/campaigns"]').click();
    //for create now button
    cy.get(".adminCampaign-topbtn-btns").click();
    //for selecting onboarding multi page quiz
    cy.contains('p', 'Onboarding Quiz - Multi page').click();
    //for edit button
    cy.contains('button',"Edit").click();
    //name of camopaign
    cy.get("input[placeholder='eg. Most Loyal Member']").clear();
    cy.get("input[placeholder='eg. Most Loyal Member']").type("test multi");
    // description of campaign
    cy.get("#basicform-textarea").clear();
    cy.get("#basicform-textarea").type("Multi page page");
    //continue button
    cy.contains('button',"Continue").click();
    //for adding action 
    cy.contains('div',"Add an Action").click();
    //for choosing user input
    cy.contains('div',"User Input").click();
    //for text 
    cy.contains('div',"Text").click();
    //enter your text question 
    cy.get("input[name='title']").type("favourite game");
    cy.contains('div',"Save action").click();
    //for single choice question
    cy.contains('div',"Single Choice").click();
    cy.get("input[placeholder='Enter the question here, eg: Choose your favorite colour?']").type("preferences");
    cy.get("#mainBox").type("code").type('{enter}');

});
//for searching campaigns in campaigns dashboard
it.only('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-123@gmail.com");
        cy.get('.loginv3-right-btn').click();
    //after login button it waits for 5 min paste your otp manually
    //for otp
    cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    cy.get('[aria-label="Please enter OTP character 6"]').type("1");  
    cy.get(".submitBtn").click(); 
    //redirects to campaign page 
    cy.get('[href="/admin/campaigns"]').click();
    //for searching campaigns 
    cy.get(".campaignTemplate-searchbox-btn").click();
   // search for your desired campaign name
    cy.get("input[placeholder='Search Campaigns']").type("se");
    cy.contains("p","Search Bar").click();
});
});