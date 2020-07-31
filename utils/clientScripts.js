module.exports.waitforpageLoading = ()=>{
   browser.pause(2000);
   browser.waitUntil(() => {
      let isload = browser.execute(()=>{
         return document.readyState;
      });
      return isload === 'complete';
   }, 'Page failed to load within stipulated time ',1000);
}

// module.exports.highlight = (element)=>{
//    let att = `${element.getAttribute('class')}`;
//    console.log(att);
//    browser.execute(()=>{
//       document.querySelector(`.port-head__title`).style.border='3px solid red'
//    });
//    browser.pause(1000);
// }

module.exports.waitTillAlertDisable = () =>{
   browser.pause(1000);
   browser.waitUntil(() =>
   $('.alert__inner').isDisplayed() === false,
      {
         timeout: 30000,
         timeoutMsg: 'Alert timeout expired'
      }
   );
}