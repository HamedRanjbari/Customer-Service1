//variables
const $ = document;
const sidebarMenu = $.querySelector(".sidebarMenu");
const openMenu = $.querySelector(".menuBar");
const closeMenu = $.querySelector(".closeIcon");
const menuItems = $.querySelectorAll(".menuItem");
const details = $.querySelectorAll(".detail");
const percent = $.querySelectorAll(".percent");
const skillsInfo = $.querySelector(".skillsInfo");
const hireMe = $.querySelector(".hireMe");

//menu
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((itemMenu) => {
      itemMenu.classList.remove("active");
    });
    item.classList.add("active");
    if (window.innerWidth <= 500) {
      sidebarMenu.style.transform = "translateX(-100%)";
    }
  });

  openMenu.addEventListener("click", () => {
    sidebarMenu.style.transform = "translateX(0)";
  });
  closeMenu.addEventListener("click", () => {
    sidebarMenu.style.transform = "translateX(-100%)";
  });
});

percent[0].style.width = "80%";
percent[1].style.width = "70%";
percent[2].style.width = "95%";
percent[3].style.width = "90%";

// details
menuItems.forEach((menu, idx) => {
  details.forEach((detail, index) => {
    menu.addEventListener("click", () => {
      if (idx === index) {
        details[idx].style.opacity = "1";
        let interval = setInterval(() => {
          details[idx].style.display = "flex";
        }, 300);
        setTimeout(() => {
          details[idx].style.transform = "translateX(0)";
          clearInterval(interval);
        }, 1000);
      } else {
        detail.style.transform = "translateX(-150%)";
        setTimeout(() => {
          detail.style.opacity = "0";
          detail.style.display = "none";
        }, 1500);
      }
    });
  });
});

details.forEach((detail) => {
  hireMe.addEventListener("click", () => {
    details.forEach((det) => {
      det.style.transform = "translateX(-150%)";
      setTimeout(() => {
        det.style.opacity = "0";
        det.style.display = "none";
      }, 1500);
    });
    details[3].style.transform = "translateX(0)";
    setTimeout(() => {
      details[3].style.opacity = "1";
      details[3].style.display = "flex";
    }, 1500);
  });
});
