# CodeceptJS_basic
Introduciton to some automation codeceptJS basics 


# Simple setup 
Create a new project 

npm init 

Then install the necessary libaraies 

npm install codeceptjs puppeteer --save-dev

Then initialise the current codecptJS

npx codeceptjs init

Now you can write your first test using 

npx codeceptjs gt


Then to run 

npx codeceptjs run --steps



# Basic actions 

These are the most common actions that will be within tests. 

amOnPage - to open a webpage (accepts relative or absolute url)
click - to locate a button or link and click on it
fillField - to enter a text inside a field
selectOption, checkOption - to interact with a form
wait* to wait for some parts of page to be fully rendered (important for testing SPA)
grab* to get values from page sources
see, dontSee - to check for a text on a page
seeElement, dontSeeElement - to check for elements on a pag