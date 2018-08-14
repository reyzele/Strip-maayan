const Proto = document.querySelector("#Proto");
const protoWrap = document.querySelector(".proto-wrap");
const proto_ = document.querySelector(".protoio-embed-prototype");
const typography = document.querySelector(".typography");
const phoneImage = document.querySelector(".typography__img");

phoneImage.style.display = "none";

window.onload = function() {
  proto_.style.display = "none";
  proto_.style.opacity = "1";
  phoneImage.style.display = "inherit";

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    Proto.addEventListener("click", handleMobile);
  } else {
    Proto.addEventListener("click", handleDesk);
  }
};

function handleDesk(e) {
  e.preventDefault();

  if (document.documentElement.clientWidth < 768) {
    proto_.style.top = "-12%";
  } else if (document.documentElement.clientWidth < 992) {
    protoWrap.style.marginBottom = "-200px";
  } else if (document.documentElement.clientWidth < 1200) {
    protoWrap.style.marginBottom = "-101px";
  }

  typography.style.padding = "0";
  phoneImage.style.display = "none";
  proto_.style.display = "block";
}

function handleMobile(e) {
  e.preventDefault();
  console.log("mobile");

  proto_.style.display = "block";
  proto_.classList.add("phones");
  proto_.style.height = "auto";
  proto_.style.top = "0";
}
