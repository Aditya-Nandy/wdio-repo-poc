const env = require('../../envs.vars');
const reusingLogin = require('../reusables/doUserLogin');
const reusingOpenHome = require('../reusables/openHomePage');
const utilScript = require('../../utils/clientScripts');
const dashboarObjs = require('./../../pageobjects/dashboardPageObjects');



describe('Dashboard page', () => {
    reusingOpenHome.openHomePage(env);
    //perform login
    reusingLogin.doLogin(env);
    //Assert
    it('User should land on the Dashboard page', () => {
        utilScript.waitforpageLoading();
        expect(browser.getUrl()).to.include(env.pageNavigation.dashboardpage);
    });

    it('Frequently used investments is displayed', () => {
        utilScript.waitforpageLoading();
        dashboarObjs.tableHeader.waitForExist();
        expect(dashboarObjs.tableHeader).to.exist;
    });
});


