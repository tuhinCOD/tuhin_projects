const sidebar = document.querySelector(".sidebar");
const oncnv = document.querySelector('[data-toggle="on-canvas"]');

document.querySelector(".logo-sm").style.display = "none";

oncnv.onclick = (event) =>{
    event.preventDefault();
    document.querySelector(".wrapper").classList.toggle("off-canvas");
    const openAccordions = document.querySelectorAll(".accordion-collapse.show");
    openAccordions.forEach(acc => {
        acc.classList.remove("show");
    });
    if (window.innerWidth >= 768 && window.innerWidth <= 970) {
        const isOffCanvas = document.querySelector(".wrapper").classList.contains("off-canvas");
        document.querySelector(".logo-sm").style.display = isOffCanvas ? "none" : "block";
        document.querySelector(".logo-lg").style.display = isOffCanvas ? "block" : "none";
    }
};

if (window.innerWidth >= 768 && window.innerWidth <= 970) {
    document.querySelector(".wrapper").classList.remove('off-canvas');
    document.querySelector(".logo-sm").style.display = "block";
    document.querySelector(".logo-lg").style.display = "none";
} else if (screen.width <= 767) {
    document.querySelector(".wrapper").classList.add('off-canvas');
} else {
    document.querySelector(".wrapper").classList.remove('off-canvas');
};

window.addEventListener("click", (e) => {
    const width = window.innerWidth;
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickedToggle = e.target.closest("[data-toggle='on-canvas']");

    if ((width < 768) && !clickedInsideSidebar && !clickedToggle) {
        document.querySelector(".wrapper").classList.add("off-canvas");
        const openAccordions = document.querySelectorAll(".accordion-collapse.show");
        openAccordions.forEach(acc => {
            acc.classList.remove("show");
        });
    };
    if ((width >= 768 && width <= 970) && !clickedInsideSidebar && !clickedToggle) {
        document.querySelector(".wrapper").classList.remove("off-canvas");
        document.querySelector(".logo-lg").style.display = "none";
        document.querySelector(".logo-sm").style.display = "block";
        const openAccordions = document.querySelectorAll(".accordion-collapse.show");
        openAccordions.forEach(acc => {
            acc.classList.remove("show");
        });
    };
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && window.innerWidth <= 970) {
        document.querySelector(".wrapper").classList.remove('off-canvas');
        document.querySelector(".logo-sm").style.display = "block";
        document.querySelector(".logo-lg").style.display = "none";
    } else if (window.innerWidth <= 767) {
        document.querySelector(".wrapper").classList.add('off-canvas');
    } else {
        document.querySelector(".wrapper").classList.remove('off-canvas');
    }
});

let onoff = document.querySelectorAll("[data-show='onoff']");
onoff.forEach((col) => {
  col.onclick = (e) => {
    if (screen.width >= 768 && screen.width < 970) {
      document.querySelector(".wrapper").classList.add('off-canvas');
      const isOffCanvas = document.querySelector(".wrapper").classList.contains("off-canvas");
      document.querySelector(".logo-sm").style.display = isOffCanvas ? "none" : "block";
      document.querySelector(".logo-lg").style.display = isOffCanvas ? "block" : "none";
    }
  }
});

let acts = document.querySelectorAll(".sidebar ul li");
acts.forEach((act) => {
act.onclick = (e) => {
    acts.forEach((list) => {
    list.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
};
});

let anchorsub = document.querySelectorAll(".sidebar ul li > ul li");
anchorsub.forEach((sub) => {
  sub.onclick = (e) => {
    anchorsub.forEach((sublist) => {
      sublist.classList.remove("subactive");
    });
    e.currentTarget.classList.add("subactive");
  }
});

const sidebarLinks = document.querySelectorAll(".sidebar-list > ul > li > a");
sidebarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const openAccordions = document.querySelectorAll(".accordion-collapse.show");
      openAccordions.forEach(acc => {
          acc.classList.remove("show");
      });
    });
});