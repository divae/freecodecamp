//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/

const CURRENCY_UNIT = {
  'ONE HUNDRED': 100,
  'TWENTY': 20,
  'TEN': 10,
  'FIVE': 5,
  'ONE': 1,
  'QUARTER': 0.25,
  'DIME': 0.1,
  'NICKEL': 0.05,
  'PENNY': 0.01,
}

let CHANGE_RESULTS = {};

const INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
const CLOSED = "CLOSED";
const OPEN = "OPEN";

const CURRENCY_NAME = 0;
const CURRENCY_VALUE = 1;
const WITHOUT_COINCIDENCE = 0;
const CERO = 0;

function closeStore(changeBox) {
  CHANGE_RESULTS.status = CLOSED;
  CHANGE_RESULTS.change = changeBox;
}

function openStore() {
  CHANGE_RESULTS.status = OPEN;
  CHANGE_RESULTS.change = [];
}

function insufficientFounds() {
  CHANGE_RESULTS.status = INSUFFICIENT_FUNDS;
  CHANGE_RESULTS.change = [];
}

function collectTheChange(currencyValue, currencyName) {
  CHANGE_RESULTS.change.push([currencyName, currencyValue]);
}

function roundChange(numberRound) {
  return Math.round(numberRound * 100) / 100;
}

function changeToReturn(cash, price) {
  return roundChange(cash - price);
}

function totalCashInitialBox(changeBox) {
  return changeBox.reduce(function (totalCash, currentCurrencyInBox, index, vector) {
    return roundChange(totalCash + currentCurrencyInBox[CURRENCY_VALUE]);
  }, CERO);
}

function insufficientFoundsBeforeFistChange(cashTotalInitialBox, actualChangeToReturn, changeBox) {
  if (cashTotalInitialBox === actualChangeToReturn) {
    closeStore(changeBox);
    return true;
  }
}

function productApperancesRealUnitCurrency(numberOfAppearancesOfCurrency,currencyRealUnitValue){
  return numberOfAppearancesOfCurrency * currencyRealUnitValue
}

function quotientRestAndRealUnitCurrency(restChange,currencyRealUnitValue){
  return Math.floor(restChange / currencyRealUnitValue);
}

function subtractChange(restChange,valueToSet){
  restChange -= valueToSet;
  return roundChange(restChange);
}

function addTotalChangeReturned(totalRetunChange,currencyValue){
  return totalRetunChange += currencyValue;
}

function checkCashRegister(price, cash, changeBox) {

  let actualChangeToReturn = changeToReturn(cash, price);
  const cashTotalInitialBox = totalCashInitialBox(changeBox);

  if (insufficientFoundsBeforeFistChange(cashTotalInitialBox, actualChangeToReturn, changeBox)) {
    return CHANGE_RESULTS;
  }

  let restChange = actualChangeToReturn;

  const reverseChangeBox = changeBox.reverse();
  const CHANGE_BOX_SIZE = reverseChangeBox.length;

  let unitsTotalValue = CERO;
  let totalRetunChange = CERO;


  openStore();

  for (let index = CERO; index < CHANGE_BOX_SIZE; index++) {

    let currencyName = reverseChangeBox[index][CURRENCY_NAME];
    let currencyValue = reverseChangeBox[index][CURRENCY_VALUE];
    let currencyRealUnitValue = CURRENCY_UNIT[currencyName];

    let numberOfAppearancesOfCurrency = quotientRestAndRealUnitCurrency(restChange,currencyRealUnitValue);

    if (numberOfAppearancesOfCurrency > WITHOUT_COINCIDENCE) {

      unitsTotalValue = productApperancesRealUnitCurrency(numberOfAppearancesOfCurrency,currencyRealUnitValue);

      let valueToSet;

      if (unitsTotalValue > currencyValue) {
        valueToSet = currencyValue;
      } else {
        valueToSet = unitsTotalValue;
      }

      restChange = subtractChange(restChange,valueToSet);
      totalRetunChange = addTotalChangeReturned(totalRetunChange,currencyValue);
      collectTheChange(valueToSet, currencyName);

    }
  }

  if (totalRetunChange < actualChangeToReturn) {
    insufficientFounds();
  }

  return CHANGE_RESULTS;

}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])