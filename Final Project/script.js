window.onload = function () {
  const hamburger = document.querySelector(".hamburger");
  const navigation = document.querySelector(".navigation");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
  });
};
