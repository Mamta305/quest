describe('for referring to campaign flow', () => {

    it('for campaign page dashboard', () => {
        cy.visit("https://staging.questlabs.ai/login");
        cy.get("input[placeholder='example@gmail.com']").click();
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
        cy.get('.loginv3-right-btn').click();
        // cy.wait(50000);
    // after login button it waits for 5 min paste your otp manually
    // for otp
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
        cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
        cy.get('.loginv3-right-btn').click();
        // cy.wait(50000);
    // after login button it waits for 5 min paste your otp manually
    // for otp
    cy.get('[aria-label="Please enter OTP character 1"]').type("1");
    cy.get('[aria-label="Please enter OTP character 2"]').type("1");
    cy.get('[aria-label="Please enter OTP character 3"]').type("1");
    cy.get('[aria-label="Please enter OTP character 4"]').type("1");
    cy.get('[aria-label="Please enter OTP character 5"]').type("1");
    cy.get('[aria-label="Please enter OTP character 6"]').type("1");   
        cy.get(".submitBtn").click(); 
        //redirects to campaign page 
        cy.get('[href="/admin/campaigns"]').click();
        cy.get('.template_search').click();
        // search specific campaign template like inline feedback
        cy.get("input[placeholder='Search']").type("onb"); 
        cy.get('[href="/admin/campaigns/create?campaignType=Onboardingsingle"] > .playgroundTemplate-card').click();
 });
 //for copy code 
 it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
        cy.get('.loginv3-right-btn').click();
        // cy.wait(50000);
    // after login button it waits for 5 min paste your otp manually
    // for otp
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
    cy.get("input[placeholder='Search']").type("qu"); 
    //for selecting quest list template
    cy.get('[href="/admin/campaigns/create?campaignType=Tutorial"] > .playgroundTemplate-card').click();
    // cy.wait(2000);
    cy.get(".copyImage").should("exist");
});
//for publish campaign
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
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
    cy.get("input[placeholder='Search']").type("get");
    //for selecting inline template
    cy.contains("p","Get Started Guide").click();    
    //to publish campaigns
    cy.contains('button', 'Publish').click();
});
//to refer to view campaign page
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
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
    //for going to already campaign created page
    cy.get(".adminCampaign-topbtn-btns").click();
    cy.get("input[placeholder='Search']").click();
    // search specific campaign template like inline feedback
    cy.get("input[placeholder='Search']").type("fee");
    //for selecting inline template
    cy.contains("p","Feedback Workflow").click();    
    //to publish campaigns
    cy.contains('button', 'Publish').click();
     cy.get('.quest_complte_view').click();
     cy.contains("div","Feedback").should("exist");
});
//for creating campaigns for already present campaigns on dashboard
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
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
    cy.contains('p', 'Spotlight Search').click();
    //for publish  button
    cy.contains('button', 'Publish').click();
});
//for edit field in campaign
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.comm");
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
    cy.get('.bottomController > :nth-child(2)').click();
    //for adding action 
    cy.contains('div',"Add an Action").click();
    //forr adding link
    cy.contains('div',"Link").click();
    //enter link tiitle
    cy.get("input[placeholder='Enter Link Title']").type("quest app");
    //enter post link
    cy.get("input[placeholder='Enter Post Link']").type("https://app.questapp.xyz/login");
    //to add more actions
    cy.get('.action-step-container > .action-card').click();
    //to refer to user input
    cy.get('.mt-auto').click();
    cy.contains("div","User Input").click();
    //to refer to single input
    cy.contains("div","Single Choice").click();
    //to enter question
    cy.get("input[placeholder='Enter the question here, eg: Choose your favorite colour?']").type("Are you about 18");
    cy.get('#customInp').type("YES").type('{enter}');
    cy.contains('div',"Save action").click();
    cy.get('.bottomController > :nth-child(2)').click();
    cy.contains("button","Publish").click();
});
//for user input in add action 
it('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
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
    cy.get('.bottomController > :nth-child(2)').click();
    //for adding action 
    cy.contains('div',"Add an Action").click();
    //for choosing user input
    cy.get('.mb-3 > .d-flex > :nth-child(2)').click();
    cy.contains("div","User Input").click();
    //for text 
    cy.contains('div',"Text").click();
    //enter your text question 
    cy.get("input[name='title']").type("favourite game");
    cy.contains('div',"Save action").click();
    //for single choice question
    cy.get('.mt-auto').click();
    cy.get('.mb-3 > .d-flex > :nth-child(2)').click();
    cy.contains('div',"Single Choice").click();
    cy.get("input[placeholder='Enter the question here, eg: Choose your favorite colour?']").type("preferences");
    cy.get('#customInp').type("code").type('{enter}');
});
//for searching campaigns in campaigns dashboard
it.only('for searching specific template', () => {
    //to visit the quest app
    cy.visit("https://staging.questlabs.ai/login");
    cy.get("input[placeholder='example@gmail.com']").click();
    //provide your email in place of taneye2059@wentcity.com
    cy.get("input[placeholder='example@gmail.com']").type("quest-user-1@gmail.com");
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
    cy.get("input[placeholder='Search Campaigns']").type("get sta");
    cy.contains("p","Get Started").click();
});
});