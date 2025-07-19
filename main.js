var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    allowTouchMove: true,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    on: {
        slideChange: function () {
            const currentIndex = this.activeIndex;
            document.querySelectorAll(".Links li").forEach((li) => {
                li.classList.remove("activeLink");
            });
            document.querySelectorAll(".Links li")[currentIndex].classList.add("activeLink");
            console.log(`Switched to slide ${currentIndex}`);
        }
    }
});

function Navigate(indx) {
    document.querySelectorAll(".Links li").forEach((li) => {
        li.classList.remove("activeLink");
    });
    document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
    thankYouMessage.innerHTML = `Thank you, <span style="color: green;">${name}</span>, for checking out my work! I'll get back to you soon.`;
    document.getElementById('contactForm').reset();
});