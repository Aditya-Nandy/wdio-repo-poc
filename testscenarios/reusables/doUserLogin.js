const loginPageObjs = require('../../pageobjects/loginPageObjects');
const loginAssertionData = require('../../utils/dataProvider/loginpagedata');
const utilS = require('../../utils/clientScripts');

module.exports.doLogin =  (loginEnv) => {
    it('User should verify the heading and be able to login into the application', () => {   
        // this.retries(2);

        loginPageObjs.loginpageHeading.waitForExist();
        let heading = loginPageObjs.loginpageHeading.getText();
        expect(heading).to.equal(loginAssertionData.loginPageHeadingText);
        let uid = loginEnv.environment_params[loginEnv.Env].username.toString();
        let pass = loginEnv.environment_params[loginEnv.Env].password.toString();
        loginPageObjs.userName.setValue(uid);
        loginPageObjs.userPassword.setValue(pass);
        loginPageObjs.loginButton.click();
        browser.pause(3000); //lazy load of application 
        utilS.waitforpageLoading();
        utilS.waitTillAlertDisable();
    });
}
