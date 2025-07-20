const offcnv = document.querySelector('[data-toggle="off-canvas"]');
const oncnv = document.querySelector('[data-toggle="on-canvas"]');
const left = document.querySelector('.bi-chevron-left');
const mdcnv = document.querySelector('[data-toggle="md-canvas"]');
const right = document.querySelector(".sidebar-btn1");

document.querySelector(".logo-sm").style.display = "none";

offcnv.onclick = (event) =>{
    event.preventDefault();
    if (window.innerWidth >= 768 && window.innerWidth <= 970) {
        document.querySelector(".wrapper").classList.remove("off-canvas");
        document.querySelector(".logo-sm").style.display = "block";
        document.querySelector(".logo-lg").style.display = "none";
        oncnv.classList.add("d-none");
        left.classList.add("d-none");
        right.classList.remove("d-none");
    } else{
        document.querySelector(".wrapper").classList.add("off-canvas");
        left.classList.add("d-none");
        oncnv.classList.remove("d-none");
    }

};
oncnv.onclick = (event) =>{
    event.preventDefault();
    document.querySelector(".wrapper").classList.remove("off-canvas");
    left.classList.remove("d-none");
    oncnv.classList.add("d-none");
};

mdcnv.onclick = (event) => {
    event.preventDefault();
    document.querySelector(".wrapper").classList.add("off-canvas");
    document.querySelector(".logo-sm").style.display = "none";
    document.querySelector(".logo-lg").style.display = "block";
    oncnv.classList.add("d-none");
    left.classList.remove("d-none");
    right.classList.add("d-none");
};

if (window.innerWidth >= 768 && window.innerWidth <= 970) {
    document.querySelector(".wrapper").classList.remove('off-canvas');
    document.querySelector(".logo-sm").style.display = "block";
    document.querySelector(".logo-lg").style.display = "none";
    oncnv.classList.add("d-none");
    left.classList.add("d-none");
    right.classList.remove("d-none");
} else if (screen.width <= 767) {
    document.querySelector(".wrapper").classList.add('off-canvas');
    left.classList.add("d-none");
    oncnv.classList.remove("d-none");
} else {
    document.querySelector(".wrapper").classList.remove('off-canvas');
    left.classList.remove("d-none");
    oncnv.classList.add("d-none");
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && window.innerWidth <= 970) {
        document.querySelector(".wrapper").classList.remove('off-canvas');
        document.querySelector(".logo-sm").style.display = "block";
        document.querySelector(".logo-lg").style.display = "none";
        oncnv.classList.add("d-none");
        left.classList.add("d-none");
        right.classList.remove("d-none");
    } else if (window.innerWidth <= 767) {
        document.querySelector(".wrapper").classList.add('off-canvas');
        left.classList.add("d-none");
        oncnv.classList.remove("d-none");
    } else {
        document.querySelector(".wrapper").classList.remove('off-canvas');
        left.classList.remove("d-none");
        oncnv.classList.add("d-none");
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