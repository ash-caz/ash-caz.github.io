//default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount = cookieCount+= grandmaPower;
    refreshCookieCount();
  }, 1000);
}
//buy a grandma
buyGrandma.addEventListener("click", function() {
  //set default varlues
  let grandmaAuto= false;
    //upgrade power Level
  grandmaLevelNumber += 1;
    //update grandma price
  grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
  //update grandma Power
  grandmaPower += 10;
  //turn autograndma on!
  autoGrandma = true
  autoGrandmaStart();
  //refresh shop item
  refreshGrandma();
});
// //let autoGrandmaStart = function() {
//   let grandmaInt = window.setInterval(function(){
//     cookieCount = cookieCount+= grandmaPower;
//     refreshCookieCount();
//   }, 1000);
// }
let refreshGrandma = function () {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}
//make sure we have enough cookies and subtraxct our cookies from the price.
if (cookieCount >= grandmaPriceAmount) {
  //sub cookies from price item
  cookieCount += -grandmaPriceAmount;
  refreshCookieCount()
} //Dpm't forget this bracket at the end of the entire buy function!!!
//refresh shop item grandma

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount();
});

//make sure we have enough cookies and subtract our cookies from the grandmaPrice
 if (cookieCount >= grandmaPriceAmount) {
  //subtract cookies from the price of the item
   cookieCount += - grandmaPriceAmount;
   refreshCookieCount()
}

  //refresh cookies
  let refreshCookieCount = function(){
    cookieCounter.innerHTML = cookieCount;
  };

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}

  buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount()
    clickPowerLevelNumber += 1* Math.floor(clickPowerLevelNumber * 1.05);
      refreshPowerClick();
    } else {
      refreshCookieCount()
    };
  });
  //game loop
  let autoFacilityStart = function() {
      let facilityInt = window.setInterval(function(){
        cookieCount = cookieCount+= facilityPower;
        refreshCookieCount();
      }, 1000);
  }

  let refreshFacility = function() {
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
  }


  //buy a facility
  buyFacility.addEventListener("click" , function() {
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;
    //set autoloop to false
    facilityAuto = false;
    if (cookieCount >= facilityPriceAmount) {
      cookieCount +=  - facilityPriceAmount;
      refreshCookieCount()
      //upgrade power level
facilityLevelNumber += 1;

//update price
facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

//update facility power
facilityPower += 600;

//turn autoFacility on!
autoFacility = true
autoFacilityStart();

//refresh shop item
refreshFacility();

  }
});
