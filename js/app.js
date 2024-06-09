const myObj = {
    queue: [],
    init: function () {
        let queue = this.queue;

        for (key in queue) {
            let f = queue[key];
            if (typeof f == 'function') {
                f();
            }
        }
    }
};
document.addEventListener('DOMContentLoaded', function () {
    myObj.init();
});
(function (){
    myObj.queue = {
        // HEADER BEGIN
        anchorMenu: function() {
            const anchorMenu = document.querySelector('.site-header__anchor-menu');
            const langBtn = document.querySelector('.site-header__langs-active');

            let blockId;
            anchorMenu.querySelectorAll('a').forEach((item) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    blockId = item.getAttribute('href');
                    console.log(blockId)
                    document.getElementById(blockId).scrollIntoView({behavior: "smooth"});
                })
            })
            
            langBtn.addEventListener('click', () => {
                langBtn.classList.toggle('active');
                document.querySelector('.site-header__langs-list').classList.toggle('active');

            })
        },
        // HEADER END

        // VIDEO BTN BEGIN
        videoBtn: function() {
            if(document.querySelector('.video-block__play-btn')) {
                document.querySelector('.video-block__play-btn').addEventListener('click', (item) => {
                    console.log(item)
                    item.target.classList.toggle('active');
                    if(item.target.classList.contains('active')) {
                        document.querySelector('.video-block video').play();
                    } else {
                        document.querySelector('.video-block video').pause();
                    }
                });
            }
        },
        // VIDEO BTN END

        // TRANSPORT SLIDER BEGIN
        transportSlider: function() {
            if(document.querySelector('.services-block__transport-slider')) {
                lightGallery(document.getElementById('lightgallery'), {
                    selector: 'a'
                });
                const swiper = new Swiper('.swiper.services-block__transport-slider', {
                    slidesPerView: 1,
                    loop: true,
                    effect: 'fade',
                    speed: 1000,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                });
            }
        },
        // TRANSPORT SLIDER END

        // SHOP SLIDER BEGIN
        shopSlider: function() {
            if(document.querySelector('.services-block__shop-images')) {
                const swiper2 = new Swiper('.swiper.services-block__shop-images', {
                    slidesPerView: 1,
                    loop: true,
                    effect: 'fade',
                    speed: 1000,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.services-block__shop-images .swiper-pagination',
                        clickable: true,
                    }
                });
            }
        },
        // SHOP SLIDER END

        // OFFERS SLIDER BEGIN
        offersSlider: function() {
            if(document.querySelector('.offers-block__slider')) {
                const swiper2 = new Swiper('.swiper.offers-block__slider', {
                    slidesPerView: 1,
                    loop: true,
                    effect: 'coverflow',
                    speed: 1000,
                    autoplay: {
                        delay: 4000,
                    },
                    navigation: {
                        nextEl: '.offers-block .swiper-button-next',
                        prevEl: '.offers-block .swiper-button-prev',
                    }
                });
            }
        },
        // OFFERS SLIDER END

        // BIG SLIDER BEGIN
        bigSlider: function() {
            if(document.querySelector('.big-slider__slider')) {
                const swiper2 = new Swiper('.swiper.big-slider__slider', {
                    slidesPerView: 1,
                    loop: true,
                    effect: 'coverflow',
                    speed: 1000,
                    autoplay: {
                        delay: 4000,
                    },
                    navigation: {
                        nextEl: '.big-slider .swiper-button-next',
                        prevEl: '.big-slider .swiper-button-prev',
                    }
                });
            }
        },
        // BIG SLIDER END

        // FLEET SLIDER BEGIN
        fleetSlider: function() {
            if(document.querySelector('.fleet-slider__slier')) {
                const swiper2 = new Swiper('.swiper.fleet-slider__slier', {
                    slidesPerView: 1,
                    loop: true,
                    effect: 'coverflow',
                    speed: 1000,
                    autoplay: {
                        delay: 4000,
                    },
                    navigation: {
                        nextEl: '.fleet-slider .swiper-button-next',
                        prevEl: '.fleet-slider .swiper-button-prev',
                    }
                });
            }
        },
        // FLEET SLIDER END

        // TO TOP BTN BEGIN
        toTopBtn: function() {
            window.addEventListener('scroll', () => {
                if(document.scrollingElement.scrollTop > 800) {
                    document.querySelector('.to-top-btn a').classList.add('active')
                } else {
                    document.querySelector('.to-top-btn a').classList.remove('active')
                }
            });
            document.querySelector('.to-top-btn a').addEventListener('click', () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        }
        // TO TOP BTN END
    }
}())
