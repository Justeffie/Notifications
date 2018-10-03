window.onload = function() {
  const cruz  = document.querySelector(".cruz");
  const ul = document.querySelector("ul");
  
  cruz.addEventListener('click', function() {
    if (cruz.classList.contains("active")) {
      ul.classList.remove("ul-active");
      cruz.classList.remove('active'); 
    } else {
      cruz.classList.add('active');
      ul.classList.add("ul-active");
    }
  });
}