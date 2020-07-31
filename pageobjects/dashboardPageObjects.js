class dashboardPage{

    get tableHeader () {return $("//h2[text()='Frequently used investments']");}
    get recentActivityFirstCell (){ return $("//h2[text()='Recent Activities']/following::tbody//tr[1]/td[1]");}
    get dashboardTab () {return $("//a[text()='Dashboard']");}
}




module.exports = new dashboardPage();