
/*===== ALERTS =====*/
function alertwindow()
{
   alert();
}

/*===== SITE =====*/

function getyear()
{
   let currentYear = new Date().getFullYear();
   console.log('Current year is', currentYear); // 👉️ 2022
   return currentYear;
}

function popupunjo()
{
   var popup = document.getElementById("unjopop");
   popup.classList.toggle("show");
}

function popupdiadrom()
{
   var popup = document.getElementById("popdiadrom");
   popup.classList.toggle("show");
}

function popupesab()
{
   var popup = document.getElementById("esabpop");
   popup.classList.toggle("show");
}