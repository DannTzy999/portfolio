$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Jiddan Najati";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Cyber Security", "Pengembangan Web", "AI"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- skills tab filter starts -->
function initSkillFilters() {
    const filterBtns = document.querySelectorAll(".skills-filter .filter-btn");
    const toolCards = document.querySelectorAll(".tools-grid .tool-card");
    if (!filterBtns.length || !toolCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            toolCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSkillFilters);
} else {
    initSkillFilters();
}
// <!-- skills tab filter ends -->




// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .heading', { delay: 200 });
srtop.reveal('.skills .competency-card', { interval: 200 });
srtop.reveal('.skills .tools-section-title', { delay: 200 });
srtop.reveal('.skills .skills-filter', { delay: 200 });
srtop.reveal('.skills .tool-card', { interval: 100 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CERTIFICATIONS */
srtop.reveal('.certifications .heading', { delay: 200 });
srtop.reveal('.certifications .cert-box', { interval: 250 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

/* ===== EXPERIENCE IMAGE LIGHTBOX / GALLERY SLIDER ===== */
function initExperienceLightbox() {
    const lightbox = document.getElementById("image-lightbox");
    if (!lightbox) return;

    const overlay = lightbox.querySelector(".lightbox-overlay");
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const prevBtn = lightbox.querySelector(".lightbox-prev");
    const nextBtn = lightbox.querySelector(".lightbox-next");
    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");
    const counterIndex = lightbox.querySelector(".lightbox-counter .current-index");
    const counterTotal = lightbox.querySelector(".lightbox-counter .total-count");
    const thumbsContainer = lightbox.querySelector(".lightbox-thumbs");

    let currentImages = [];
    let currentIndex = 0;
    let currentTitle = "";

    function parseCardImages(expImageEl) {
        let imgs = [];
        const dataImages = expImageEl.getAttribute("data-images");
        if (dataImages) {
            try {
                const parsed = JSON.parse(dataImages);
                if (Array.isArray(parsed)) {
                    imgs = parsed.map(item => (typeof item === "string" ? { src: item, alt: "" } : item));
                }
            } catch (err) {
                imgs = dataImages.split(",").map(s => ({ src: s.trim(), alt: "" })).filter(x => x.src);
            }
        }

        if (!imgs.length) {
            expImageEl.querySelectorAll("img").forEach(img => {
                const src = img.getAttribute("src") || img.src;
                if (src) {
                    imgs.push({
                        src: src,
                        alt: img.getAttribute("alt") || ""
                    });
                }
            });
        }

        return imgs;
    }

    function renderThumbs() {
        if (!thumbsContainer) return;
        thumbsContainer.innerHTML = "";
        if (currentImages.length <= 1) return;

        currentImages.forEach((imgObj, i) => {
            const thumb = document.createElement("img");
            thumb.className = "lightbox-thumb" + (i === currentIndex ? " active" : "");
            thumb.src = imgObj.src;
            thumb.alt = imgObj.alt || `Foto ${i + 1}`;
            thumb.draggable = false;
            thumb.addEventListener("click", function (e) {
                e.stopPropagation();
                showSlide(i);
            });
            thumbsContainer.appendChild(thumb);
        });
    }

    function showSlide(index) {
        if (!currentImages.length) return;
        currentIndex = (index + currentImages.length) % currentImages.length;
        const activeImg = currentImages[currentIndex];

        lightboxImg.style.opacity = "0";
        setTimeout(() => {
            lightboxImg.src = activeImg.src;
            lightboxImg.alt = activeImg.alt || currentTitle || "Preview Gambar";
            lightboxImg.style.opacity = "1";
        }, 120);

        if (counterIndex) counterIndex.textContent = currentIndex + 1;
        if (counterTotal) counterTotal.textContent = currentImages.length;

        if (thumbsContainer) {
            const allThumbs = thumbsContainer.querySelectorAll(".lightbox-thumb");
            allThumbs.forEach((th, i) => {
                if (i === currentIndex) {
                    th.classList.add("active");
                    th.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                } else {
                    th.classList.remove("active");
                }
            });
        }
    }

    function openLightbox(images, startIndex, title) {
        if (!images || !images.length) return;
        currentImages = images;
        currentTitle = title || "";

        if (lightboxCaption) lightboxCaption.textContent = currentTitle;

        if (currentImages.length <= 1) {
            lightbox.classList.add("single-image");
        } else {
            lightbox.classList.remove("single-image");
        }

        renderThumbs();
        showSlide(startIndex || 0);

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
                if (lightboxImg) lightboxImg.src = "";
                currentImages = [];
            }
        }, 300);
    }

    function nextSlide() {
        if (currentImages.length > 1) {
            showSlide(currentIndex + 1);
        }
    }

    function prevSlide() {
        if (currentImages.length > 1) {
            showSlide(currentIndex - 1);
        }
    }

    // Attach click events and badges to each card
    document.querySelectorAll(".experience .exp-image").forEach(expImage => {
        const card = expImage.closest(".content");
        const title = card ? card.querySelector("h2")?.textContent.trim() : "";
        const images = parseCardImages(expImage);

        // Add badge if images > 1 and not already present
        if (images.length > 1) {
            let badge = expImage.querySelector(".exp-gallery-badge");
            if (!badge) {
                badge = document.createElement("span");
                badge.className = "exp-gallery-badge";
                badge.innerHTML = `<i class="fas fa-images"></i> <span>${images.length}</span>`;
                expImage.appendChild(badge);
            }
        }

        expImage.addEventListener("click", function (e) {
            e.stopPropagation();
            openLightbox(images, 0, title);
        });
    });

    // Attach click events to certification cards
    document.querySelectorAll(".certifications .cert-image").forEach(certImage => {
        const card = certImage.closest(".cert-box");
        const title = card ? card.querySelector("h3")?.textContent.trim() : "";
        const img = certImage.querySelector("img");
        if (!img) return;
        const images = [{
            src: img.getAttribute("src") || img.src,
            alt: img.getAttribute("alt") || title || "Sertifikat"
        }];

        certImage.addEventListener("click", function (e) {
            e.stopPropagation();
            openLightbox(images, 0, title);
        });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (overlay) overlay.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        prevSlide();
    });
    if (nextBtn) nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        nextSlide();
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape" || e.keyCode === 27) {
            closeLightbox();
        } else if (e.key === "ArrowLeft" || e.keyCode === 37) {
            prevSlide();
        } else if (e.key === "ArrowRight" || e.keyCode === 39) {
            nextSlide();
        }
    });

    // Touch swipe gestures on mobile
    let touchStartX = 0;
    let touchStartY = 0;
    const contentArea = lightbox.querySelector(".lightbox-content") || lightbox;

    contentArea.addEventListener("touchstart", function (e) {
        if (e.touches && e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }
    }, { passive: true });

    contentArea.addEventListener("touchend", function (e) {
        if (e.changedTouches && e.changedTouches.length === 1) {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;

            if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
    }, { passive: true });
}

// Initialize on DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExperienceLightbox);
} else {
    initExperienceLightbox();
}