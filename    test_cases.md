Having trouble with load time. Creating all test cases in one case.
title: Test Case 1
description: Successful login to website
Steps: 1. visit saucedemo.com 2. enter username 3. enter password 4. click on login 
expected results: successful login, main page should be visable

title: Test Case 2
description: Add shirt to cart
Steps: 1. Click on add to cart
expected results: item should be added to cart changing text on "add to cart" to "remove" if it has been added successfully.

Title: Test Case 3
description: click on check out cart
Steps: 1. click on check out cart icon in right hand corner at top of screen
expected results: item should be shown in cart with option to click on remove, continue shopping or checkout

Title: Test Case 4
description: click on check out button and entering information in check out process
Steps: 1. Click on checkout button 2. enter first name 3. enter last name 4. enter zip code 5. click on continue
expected results: we should be able to advance to the next screen that reconfirms our order, shipping and cost and then click on "finish" to complete the transaction.

Title: Test Case 5
description: getting back to the home page after checking out.
Steps: 1. click "back to home" 
expected results: we should successfuly go back to the website home page after completing our checkout by using the "back to home" button.

Restful API Testing:
File "getname.spec.cy.js"
Description: retrival of booking information. The name John failed. Came to the conclusion it was an API response error (check file for more details)

File "getonename.spc.cy.js"
Description: Retrival of booking information. Only one name this time, Michael. The test was successful.

File "healthCheck.spec.cy.js"
Description: Checking the health of the website to make sure it exists and is running property. The test was successful.

File "getbooking.spec.cy.js"
Description: Retrieving the booking for a specific ID (#403). The test was successful.

File "deletebooking.spec.cy.js"
Description: Creating token required for deleting a booking (#403). used "let token" so the cookie would not expire. The test was successful.