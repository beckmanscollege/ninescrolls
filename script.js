/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
function myFunction() {
  document.getElementById("scrollone").style.width = "500%";
 document.getElementById("scrollone").style.height = "100%";}


function hideAddressBar() {
  if(!window.location.hash) {
    if(document.height < window.outerHeight)
      document.body.style.height = (window.outerHeight + 50) + 'px';
    setTimeout( function(){ 
        window.scrollTo(0, 1); 
        document.body.style.height = 'auto'; 
      }, 50 );
  }
}