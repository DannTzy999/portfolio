$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 





// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Experience | Portfolio Jiddan Najati";
        $("#favicon").attr("href","/assets/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href","/assets/images/favhand.png");
    }
});

/* ===== EXPERIENCE IMAGE LIGHTBOX / MODAL PREVIEW ===== */
function initExperienceLightbox() {
    const lightbox = document.getElementById("image-lightbox");
    if (!lightbox) return;

    const overlay = lightbox.querySelector(".lightbox-overlay");
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");

    function openLightbox(src, alt, caption) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "Preview";
        lightboxCaption.textContent = caption || "";
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        setTimeout(() => {
            if (!lightbox.classList.contains("active")) {
                lightboxImg.src = "";
            }
        }, 300);
    }

    // Attach click events to experience images
    document.querySelectorAll(".experience .exp-image img").forEach(img => {
        img.addEventListener("click", function (e) {
            e.stopPropagation();
            const card = img.closest(".content");
            const title = card ? card.querySelector("h2")?.textContent : img.alt;
            openLightbox(img.src, img.alt, title);
        });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (overlay) overlay.addEventListener("click", closeLightbox);

    // Close when pressing Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            if (lightbox.classList.contains("active")) {
                closeLightbox();
            }
        }
    });
}

// Initialize on DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExperienceLightbox);
} else {
    initExperienceLightbox();
}