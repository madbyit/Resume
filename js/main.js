/*===== SIDEBAR HEADER FOOTER =====*/

function getcurrentyear()
{
   document.getElementById("year").innerHTML = new Date().getFullYear();
}

/*===== POPUP WINDOW =====*/

function popupwindow(id)
{
   let popup = "";

   switch(id)
   {
      case unjo:
            popup = document.getElementById("unjopop");
            popup.classList.toggle("show");
         break;
      case diadrom:
            popup = document.getElementById("popdiadrom");
            popup.classList.toggle("show");
         break;
      case esab:
            popup = document.getElementById("esabpop");
            popup.classList.toggle("show");
         break;
         default:
            console.log(id);
            break;
   }
}