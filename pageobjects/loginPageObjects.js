class loginPage{

    get userName () {return $('#login_username');}
    get userPassword () {return $('#login_password');}
    get loginButton () {return $('#login_submit');}
    get loginpageHeading () {return $('.//h1');}
}




module.exports = new loginPage();