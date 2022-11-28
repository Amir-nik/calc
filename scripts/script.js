let widthSize;

function reportWindowSize() {
  widthSize= window.innerWidth;
  if (window.innerWidth>=992) {

      document.getElementById("logo").setAttribute("hidden","true")
    }
    else{
      document.getElementById("logo").removeAttribute("hidden")
    }
}
window.addEventListener("onload", reportWindowSize);
window.addEventListener("resize", reportWindowSize);
reportWindowSize();