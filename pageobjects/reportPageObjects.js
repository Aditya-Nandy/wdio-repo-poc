class reportPage{

    get createNewReportBtn () {return      $("//a[contains(text(),'Create new report')]");}
    get createNewReportHeading () {return  $("//h1[text()='Create a new report']");}
    get clientInfoReportName () {return    $("//h3[text()='Client information']/following::input[@*='reportName']");}
    get clientInfoFirstName () {return     $("//h3[text()='Client information']/following::input[@*='clientFirstName']");}
    get clientInfoSecondName () {return    $("//h3[text()='Client information']/following::input[@*='clientLastName']");}
    get advisorFirstName () {return        $("//h3[text()='Advisor information']/following::input[@*='advisorFirstName']");}
    get advisorLastName () {return         $("//h3[text()='Advisor information']/following::input[@*='advisorLastName']");}
    get advisorBrokerName () {return       $("//h3[text()='Advisor information']/following::input[@*='advisorBrokerName']");}
    get advisorCity () {return             $("//h3[text()='Advisor information']/following::input[@*='advisorCity']");}
    get advisorPhone () {return            $("//h3[text()='Advisor information']/following::input[@*='advisorPhone']");}
    get advisorZip () {return              $("//h3[text()='Advisor information']/following::input[@*='advisorZip']");}
    get advisorEmail () {return            $("//h3[text()='Advisor information']/following::input[@*='advisorEmail']");}
    get generateReportBtn (){return        $("(//button[text()='Generate report'])[1]");}
    get digitalReportName (){return        $("//h2[@*='port-head__title']");}



    reportTypeBasedOnName (typeName){
        return $(`//h3[text()='REPORT TYPES']/following::*[text()='${typeName}']/../..`);
    }

    advisorSelectStateByValue (State){
        let selects = "//h3[text()='Advisor information']/following::select[@*='advisorState']";
        $(selects).waitForExist();
        browser.pause(1500);
        let names = selects + `//*[@*='${State}']`;
        return $(names);
    }



}




module.exports = new reportPage();



