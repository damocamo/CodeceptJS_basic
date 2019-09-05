
Feature('Navigation to Melbourne Website');

Scenario('test something', (I) => {
    I.amOnPage('https://www.afl.com.au');
    I.waitForElement({ css: "a[href*='melbourne']" }, 10); // secs
    I.click({ css: "a[href*='melbourne']" });
    //Since this opens a new tab we need do switch focus
    I.switchToNextTab();
    I.seeInTitle('Official AFL Website of the Melbourne Football Club - melbournefc.com.au');
});
