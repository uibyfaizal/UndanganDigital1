// Falling stars
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 7000);
}
setInterval(createStar, 400);

// Countdown Timer
const targetDate = new Date("2025-12-20T09:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Tombol Open Invitation
document.getElementById("openBtn").addEventListener("click", function () {
    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("countdown").classList.remove("hidden");
    document.getElementById("acara").classList.remove("hidden");
    document.getElementById("informasi").classList.remove("hidden");
    document.getElementById("guestbook").classList.remove("hidden");

    // Inisialisasi AOS setelah tombol ditekan
    AOS.init({ duration: 1200, once: true });

    // scroll ke countdown
    document.getElementById("countdown").scrollIntoView({ behavior: "smooth" });
});

// Guestbook functionality
const form = document.getElementById("ucapanForm");
const ucapanList = document.getElementById("ucapanList");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    if (!nama || !pesan) return;

    const waktu = new Date().toLocaleString("id-ID", {
        dateStyle: "long",
        timeStyle: "short"
    });

    const div = document.createElement("div");
    div.classList.add("ucapan-item");
    div.innerHTML = `<strong>${nama}</strong><small>${waktu}</small><p>${pesan}</p>`;

    ucapanList.prepend(div);
    form.reset();
});

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor berhasil disalin: " + text);
    });
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".galeri-foto").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});