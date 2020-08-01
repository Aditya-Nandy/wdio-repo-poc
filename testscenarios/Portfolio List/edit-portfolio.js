const env = require('../../envs.vars');
const reusingLogin = require('../reusables/doUserLogin');
const reusingOpenHome = require('../reusables/openHomePage');
const utilScript = require('../../utils/clientScripts');
const portfolioListObjs = require('../../pageobjects/portfolioListPageObjects');
const dashboardListObjs = require('../../pageobjects/dashboardPageObjects');
const reportPageObjs = require('../../pageobjects/reportPageObjects');
const dataProvider = require('../../utils/dataProvider/portfoliopagedata');


// describe('Verify user can edit portfolio and add fund - ', () => {
//     reusingOpenHome.openHomePage(env);
//     reusingLogin.doLogin(env);

//     it('navigate to the Portfolio list page', () => {
//         portfolioListObjs.portfolioTab.waitForExist();
//         portfolioListObjs.portfolioTab.click();
//         utilScript.waitforpageLoading();
//         expect(browser.getUrl()).to.include(env.pageNavigation.portfoliopage);
//     });

//     it('navigate to the Portfolio datails page', () => {
//         utilScript.waitTillAlertDisable();
//         portfolioListObjs.openPortfolioLink(dataProvider.portfolioName).waitForExist();
//         portfolioListObjs.openPortfolioLink(dataProvider.portfolioName).click();
//         utilScript.waitforpageLoading();
//         utilScript.waitTillAlertDisable();
//         portfolioListObjs.portfolioNameInDeatilsPage.waitForExist();
//         expect(portfolioListObjs.portfolioNameInDeatilsPage.isDisplayed()).to.equal(true);
//     });

//     it('edit and add fund into the portfolio', () => {
//         portfolioListObjs.editPortfolioBtn2.waitForExist();
//         portfolioListObjs.editPortfolioBtn2.click();
//         utilScript.waitforpageLoading();
//         utilScript.waitTillAlertDisable();
//         portfolioListObjs.addFundSearchBox.waitForExist();
//         portfolioListObjs.addFundSearchBox.click();
//         portfolioListObjs.addFundSearchBox.setValue('Cash');  //type of fund

//         portfolioListObjs.nthChildTickerInFUndList(3).waitForDisplayed();
//         let ticker = portfolioListObjs.nthChildTickerInFUndList(3).getText();
//         console.log(`TICKER: ${ticker}`);
//         portfolioListObjs.nthChildInFUndList(3).click();
//         utilScript.waitTillAlertDisable();
//         portfolioListObjs.fundTickerInTable(ticker).waitForExist();
//         portfolioListObjs.savePortfolio.click();
//         utilScript.waitTillAlertDisable();
//         utilScript.waitforpageLoading();
//         utilScript.waitTillAlertDisable();
        
//         //go to dashboard
//         dashboardListObjs.dashboardTab.click();
//         browser.pause(2000);
//         utilScript.waitforpageLoading();
//         utilScript.waitTillAlertDisable();
//         dashboardListObjs.recentActivityFirstCell.waitForExist();
//         browser.pause(2000);
//         let activity = dashboardListObjs.recentActivityFirstCell.getText();
//         console.log("ACTIVITY: "+activity);
//         expect(activity).to.containIgnoreCase(dataProvider.portfolioName);
//         expect(activity).to.containIgnoreCase('was changed');
//     });
// });


describe('Verify user can compare portfolios and create report - ', () => {
    reusingOpenHome.openHomePage(env);
    reusingLogin.doLogin(env);

    it('navigate to the Portfolio list page', () => {
        portfolioListObjs.portfolioTab.waitForExist();
        portfolioListObjs.portfolioTab.click();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();
        expect(browser.getUrl()).to.include(env.pageNavigation.portfoliopage);
    });

    it('select two portfolios and compare', () => {
        portfolioListObjs.portfolioCheckbox(dataProvider.portfolioName).waitForExist();
        portfolioListObjs.portfolioCheckbox(dataProvider.portfolioName).click();
        browser.pause(1000);
        portfolioListObjs.portfolioCheckbox(dataProvider.portfolioName2).waitForExist();
        portfolioListObjs.portfolioCheckbox(dataProvider.portfolioName2).click();
        browser.pause(1000);
        
        portfolioListObjs.compareButton.waitForClickable();
        portfolioListObjs.compareButton.click();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();

        portfolioListObjs.ReportTab.waitForExist();
        portfolioListObjs.ReportTab.click();
        reportPageObjs.createNewReportBtn.waitForExist();
        reportPageObjs.createNewReportBtn.waitForClickable();
        reportPageObjs.createNewReportBtn.click();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();

        reportPageObjs.createNewReportHeading.waitForDisplayed();
        expect(reportPageObjs.createNewReportHeading.isDisplayed()).to.equal(true);

        reportPageObjs.reportTypeBasedOnName('Heat map').waitForExist();
        reportPageObjs.reportTypeBasedOnName('Heat map').click();
        reportPageObjs.reportTypeBasedOnName('Comprehensive').waitForExist();
        reportPageObjs.reportTypeBasedOnName('Comprehensive').click();
        reportPageObjs.clientInfoReportName.waitForExist();
        reportPageObjs.clientInfoReportName.setValue('Report 1 Automated');
        reportPageObjs.clientInfoFirstName.waitForExist();
        reportPageObjs.clientInfoFirstName.clearValue();
        reportPageObjs.clientInfoFirstName.setValue('John');
        reportPageObjs.clientInfoSecondName.waitForExist();
        reportPageObjs.clientInfoSecondName.clearValue();
        reportPageObjs.clientInfoSecondName.setValue('Doe');
        reportPageObjs.advisorFirstName.waitForExist();
        reportPageObjs.advisorFirstName.clearValue();
        reportPageObjs.advisorFirstName.setValue('Automated');
        reportPageObjs.advisorLastName.waitForExist();
        reportPageObjs.advisorLastName.clearValue();
        reportPageObjs.advisorLastName.setValue('Suite');
        reportPageObjs.advisorCity.waitForExist();
        reportPageObjs.advisorCity.setValue('NY');
        reportPageObjs.advisorBrokerName.waitForExist();
        reportPageObjs.advisorBrokerName.setValue('JHancock');
        reportPageObjs.advisorPhone.waitForExist();
        reportPageObjs.advisorPhone.setValue('1234567890');
        reportPageObjs.advisorZip.waitForExist();
        reportPageObjs.advisorZip.setValue('us123');
        reportPageObjs.advisorEmail.waitForExist();
        reportPageObjs.advisorEmail.clearValue();
        reportPageObjs.advisorEmail.setValue('JH@jh.com');
        reportPageObjs.advisorSelectStateByValue('Arizona').click();

        reportPageObjs.generateReportBtn.waitForClickable();
       reportPageObjs.generateReportBtn.click();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();

        reportPageObjs.digitalReportName.waitForDisplayed();
        let rep = reportPageObjs.digitalReportName.getText();
        console.log("DIGITAL REPORT NAME: "+rep);
        expect(rep).to.equal('Report 1 Automated');
    });

    it('assert recent activity on the Dashboard page', () => {
        browser.url(env.pageNavigation.dashboardpage);
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();
        dashboardListObjs.recentActivityFirstCell.waitForExist();
        browser.pause(2000);
        let activity = dashboardListObjs.recentActivityFirstCell.getText();
        console.log("ACTIVITY: "+activity);
        expect(activity).to.containIgnoreCase("Report 'Report 1 Automated'");
        expect(activity).to.containIgnoreCase('was opened');
    });

    it('check newly created report on the compare portfolios page', () => {
        portfolioListObjs.portfolioTab.waitForExist();
        portfolioListObjs.portfolioTab.click();
        browser.pause(1000);
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();
        portfolioListObjs.compareButton.waitForClickable();
        portfolioListObjs.compareButton.click();
        utilScript.waitforpageLoading();
        utilScript.waitTillAlertDisable();

        portfolioListObjs.ReportTab.waitForExist();
        portfolioListObjs.ReportTab.click();
        portfolioListObjs.reportTableByReportName('Report 1 Automated').waitForExist();
        expect(portfolioListObjs.reportTableByReportName('Report 1 Automated').isDisplayed()).to.equal(true);
    });
});

