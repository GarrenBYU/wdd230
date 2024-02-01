//Last Modified Date DOM
setElementText("#lastModified", "Last modified: " + (new Date(document.lastModified).toLocaleString('en-us')))
//Copywrite Year
setElementText("#copywrite-year", (new Date()).getFullYear());

function setElementText(element, text){
    document.querySelector(element).innerText = text;
}