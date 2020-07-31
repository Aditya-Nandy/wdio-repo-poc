const env = require('../../envs.vars');
const reusingLogin = require('../reusables/doUserLogin');
const reusingOpenHome = require('../reusables/openHomePage');
const utilScript = require('../../utils/clientScripts');
const portfolioListObjs = require('../../pageobjects/portfolioListPageObjects');
const dashboardListObjs = require('../../pageobjects/dashboardPageObjects');
const dataProvider = require('../../utils/dataProvider/portfoliopagedata');


describe('Verify user can edit portfolio and add fund - ', () => {
    reusingOpenHome.openHomePage(env);
    reusingLogin.doLogin(env);

    it('navigate to the Portfolio list page', () => {
        utilScript.waitforpageLoading();
        portfolioListObjs.portfolioTab.waitForExist();
        portfolioListObjs.portfolioTab.click();
        utilScript.waitforpageLoading();
        expect(browser.getUrl()).to.include(env.pageNavigation.portfoliopage);
    });

    it('navigate to the Portfolio datails page', () => {
        utilScript.waitTillAlertDisable();
        portfolioListObjs.openPortfolioLink(dataProvider.portfolioName).waitForExist();
        portfolioListObjs.openPortfolioLink(dataProvider.portfolioName).click();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();
        portfolioListObjs.portfolioNameInDeatilsPage.waitForExist();
        expect(portfolioListObjs.portfolioNameInDeatilsPage.isDisplayed()).to.equal(true);
    });

    it('edit and add fund into the portfolio', () => {
        portfolioListObjs.editPortfolioBtn2.waitForExist();
        portfolioListObjs.editPortfolioBtn2.click();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();
        portfolioListObjs.addFundSearchBox.waitForExist();
        portfolioListObjs.addFundSearchBox.click();
        portfolioListObjs.addFundSearchBox.setValue('Cash');  //type of fund

        portfolioListObjs.nthChildTickerInFUndList(3).waitForDisplayed();
        let ticker = portfolioListObjs.nthChildTickerInFUndList(3).getText();
        console.log(`TICKER: ${ticker}`);
        portfolioListObjs.nthChildInFUndList(3).click();
        utilScript.waitTillAlertDisable();
        portfolioListObjs.fundTickerInTable(ticker).waitForExist();
        portfolioListObjs.savePortfolio.click();
        utilScript.waitTillAlertDisable();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();
        
        //go to dashboard
        dashboardListObjs.dashboardTab.click();
        browser.pause(2000);
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();
        dashboardListObjs.recentActivityFirstCell.waitForExist();
        browser.pause(2000);
        let activity = dashboardListObjs.recentActivityFirstCell.getText();
        console.log("ACTIVITY: "+activity);
        expect(activity).to.containIgnoreCase(dataProvider.portfolioName);
        expect(activity).to.containIgnoreCase('was changed');
    });
});


