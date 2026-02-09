// Back to top button logic
let mybutton = document.getElementById("backToTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// -------------------------------
AOS.init({ duration: 1200, once: true });

// Navbar scroll effect
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").style.padding = "10px 0";
    document.querySelector(".navbar").style.boxShadow =
      "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    document.querySelector(".navbar").style.padding = "15px 0";
  }
});
