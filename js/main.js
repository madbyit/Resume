
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

function popupwindow(id)
{
   if(id == unjo)
   {
      var popup = document.getElementById("unjopop");
      console.log(id);
      popup.classList.toggle("show");
   }

   if(id == diadrom)
   {
      var popup = document.getElementById("popdiadrom");
      console.log(id);
      popup.classList.toggle("show");
   }

   if(id == esab)
   {
      var popup = document.getElementById("esabpop");
      console.log(id);
      popup.classList.toggle("show");
   }

}