class portfolioListPage{
    get alertLoad () {return $('.alert__inner');}

    get savePortfolio () {return                $("//button[text()='Save and see results']")};
    get editPortfolioBtn2 (){return             $("//button[text()=' Edit Portfolio']")};
    get addFundSearchBox (){return              $("(//*[text()='Add a new fund']/following::input)[1]")};
    get portfolioNameInDeatilsPage () {return   $("//h2[contains(@class,'head__title')]");}
    get portfolioTab () {return                 $("//a[text()='Portfolios']");}
    get compareButton (){return                 $("//button[@*='Compare Selected']");}
    get ReportTab (){return                     $("//a[text()='Reports']");}
    


    reportTableByReportName (name){
        return $(`//table[@*='reports-table']//td//a[text()='${name}']`);
    }

    portfolioCheckbox (portfolioName) {
        return $(`//*[text()='${portfolioName}']/..//label/*`);
    }


    openPortfolioLink (portfolioName) {return $(`//a[starts-with(text(), '${portfolioName}')]`);}


    nthChildInFUndList (index) {
        return $(`ul.port-funds__list>:nth-child(${index-1})>button`);
    }

    nthChildTickerInFUndList (index) {
        return $(`ul.port-funds__list>:nth-child(${index-1})>button>div>p`);
    }

    fundTickerInTable (ticker){
        return $(`//td[text()=' ${ticker} ']`);
    }

    
}




module.exports = new portfolioListPage();