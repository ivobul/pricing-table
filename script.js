const standardPriceMonthly = 9;
const advancedPriceMonthly = 15;
const enterprisePriceMonthly = 20;

const standardPriceDiscount = (49/100) * standardPriceMonthly;
const advancedPriceDiscount = (50/100) * advancedPriceMonthly;
const enterprisePriceDiscount = (52/100) * enterprisePriceMonthly;

const standardPriceYearly = standardPriceMonthly - standardPriceDiscount;
const advancedPriceYearly = advancedPriceMonthly - advancedPriceDiscount;
const enterprisePriceYearly = enterprisePriceMonthly - enterprisePriceDiscount;

const standardPrice = document.querySelector(".standard .price");
const advancedPrice = document.querySelector(".advanced .price");
const enterprisePrice = document.querySelector(".enterprise .price");

const standardOldPrice = document.querySelector(".standard .old-price");
const advancedOldPrice = document.querySelector(".advanced .old-price");
const enterpriseOldPrice = document.querySelector(".enterprise .old-price");

const standardImportantMessage = document.querySelector(".standard .important-message");
const advancedImportantMessage = document.querySelector(".advanced .important-message");
const enterpriseImportantMessage = document.querySelector(".enterprise .important-message");

const form = document.querySelector(".form");

const radioBtnMonthly = document.querySelector('input[name=price]');
const radioBtnYearly = document.querySelector('input[value="yearly"]');

radioBtnMonthly.addEventListener("click", monthly);
radioBtnYearly.addEventListener("click", yearly);

window.addEventListener("load", () => {
  form.reset();
});

function monthly () {
  standardPrice.innerText = `${standardPriceMonthly} Eur`;
  advancedPrice.innerText = `${advancedPriceMonthly} Eur`;
  enterprisePrice.innerText = `${enterprisePriceMonthly} Eur`;

  standardOldPrice.style.display = "none";
  advancedOldPrice.style.display = "none";
  enterpriseOldPrice.style.display = "none";

  standardOldPrice.innerText = "";
  advancedOldPrice.innerText = "";
  enterpriseOldPrice.innerText = "";

  standardImportantMessage.style.display = "none";
  advancedImportantMessage.style.display = "none";
  enterpriseImportantMessage.style.display = "none";

  standardImportantMessage.innerText = "";
  advancedImportantMessage.innerText = "";
  enterpriseImportantMessage.innerText = "";
}

function yearly () {
  standardPrice.innerText = `${standardPriceYearly} Eur`;
  advancedPrice.innerText = `${advancedPriceYearly} Eur`;
  enterprisePrice.innerText = `${enterprisePriceYearly} Eur`;

  standardOldPrice.style.display = "block";
  advancedOldPrice.style.display = "block";
  enterpriseOldPrice.style.display = "block";

  standardOldPrice.innerText = `${standardPriceMonthly} Eur`;
  advancedOldPrice.innerText = `${advancedPriceMonthly} Eur`;
  enterpriseOldPrice.innerText = `${enterprisePriceMonthly} Eur`;

  standardImportantMessage.style.display = "block";
  advancedImportantMessage.style.display = "block";
  enterpriseImportantMessage.style.display = "block";

  standardImportantMessage.innerText = "Save 49% on 1st Year";
  advancedImportantMessage.innerText = "Save 50% on 1st Year";
  enterpriseImportantMessage.innerText = "Save 52% on 1st Year";
}