/* Toggle between showing and hiding the navigation menu 
links when the user clicks on the hamburger menu / bar icon

took this from w3schools to figure this out
*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 