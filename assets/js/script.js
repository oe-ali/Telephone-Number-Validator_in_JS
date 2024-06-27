const usNumber = document.getElementById("us-number");
const deNumber = document.getElementById("de-number");
const selector = document.getElementById("selector");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


const setCountryCode = () => {
    if (selector.value === "US") {
        userInput.placeholder = "(+1)";
    } 
    else if (selector.value === "DE") {
        userInput.placeholder = "(+49)";
    }
};
  
const validateNumber = (phoneNumber) => {
    if (selector.value === "US") {
        const regexUS = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
        return regexUS.test(phoneNumber);
    } 
    else if (selector.value === "DE") {
        const regexDE = /^(?:\+49|0)(?:\s*\d+){0,2}\s*\/?\s*\d{4,13}$/;
        return regexDE.test(phoneNumber);
    }
};
  
const checkBtnClick = () => {
    const phoneNumber = userInput.value;
  
    if (phoneNumber === "") {
        return alert("Please provide a phone number")
    } 
    
    const country = selector.value === "US" ? "US" : "DE";
    const validationMessage = validateNumber(phoneNumber) ? `Valid ${country} number: ${phoneNumber}` : `Invalid ${country} number: ${phoneNumber}`;
    resultsDiv.innerText = validationMessage;
};



selector.addEventListener("change", setCountryCode);
checkBtn.addEventListener("click", checkBtnClick);
clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
  });

setCountryCode();