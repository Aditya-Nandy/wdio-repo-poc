module.exports.openHomePage = (env) =>{
      //open application
    browser.url(env.pageNavigation.home);
    browser.maximizeWindow();
    // browser.clearLocalStorage();
    // browser.clearSessionStorage();
    browser.setTimeout({ 'pageLoad': 20000 });
    browser.pause(1000);

}