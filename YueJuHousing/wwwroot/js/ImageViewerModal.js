$(document).ready(function () {
    console.log("DOM fully loaded and parsed");

    var modal = document.getElementById('image-viewer-modal');
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
    var thumbnailsContainer = $('#thumbnail-container');
    var navbar = document.querySelector('.navbar-static-top');
    var detailhouse = document.querySelector('.detail-house');
    var originalZIndex = window.getComputedStyle(navbar).zIndex;
    var originalDetailposition = window.getComputedStyle(detailhouse).position;
    var currentIndex = 0;
    var currentImages = [];

    function initializeCarousel() {
        thumbnailsContainer.owlCarousel({
            items: 5,
            margin: 10,
            nav: false,
            dots: true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    function initializeTouchCarousel() {
        $('#touch-carousel').owlCarousel({
            items: 1,
            margin: 0,
            nav: false,
            loop: true,
            center: true,
            autoHeight: true,
            dots: true,
            loop: true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"]
        });
    }

    function destroyCarousel() {
        thumbnailsContainer.trigger('destroy.owl.carousel');
        thumbnailsContainer.find('.owl-stage-outer').children().unwrap();
        thumbnailsContainer.removeClass("owl-center owl-loaded owl-text-select-on");
    }

    function attachImageClickListeners(images) {
        currentImages = Array.from(images);
        images.forEach(function (image, index) {
            image.addEventListener('click', function () {
                console.log("Image clicked: ", this);
                currentIndex = index;
                openModal(this.src, this.alt, images);
            });
        });
    }

    function openModal(imageSrc, imageAlt, images) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        captionText.innerHTML = imageAlt;
        document.body.classList.add("modal-open");

        navbar.style.zIndex = '0';
        detailhouse.style.position = 'static';

        destroyCarousel();

        thumbnailsContainer.empty();

        images.forEach(function (img) {
            var thumb = document.createElement('img');
            thumb.src = img.src;
            thumb.alt = img.alt;
            thumb.addEventListener('click', function () {
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
            var item = document.createElement('div');
            item.classList.add('item');
            item.appendChild(thumb);
            thumbnailsContainer.append(item);
        });

        initializeCarousel();
    }

    function initializeImageClickListeners() {
        var pcImages = document.querySelectorAll('.album-image');
        var touchImages = document.querySelectorAll('.album-image-touch');

        if (window.innerWidth <= 849.98) { // 小屏幕
            attachImageClickListeners(touchImages);
            initializeTouchCarousel(); // 初始化手机端的轮播器
        } else { // 大屏幕
            attachImageClickListeners(pcImages);
        }

        // 为“查看全部15张照片”按钮添加点击事件
        var viewMoreBtn = document.querySelector('.view-more-btn');
        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', function () {
                openModal(pcImages[0].src, pcImages[0].alt, pcImages); // 打开模态框并显示轮播
            });
        }
    }

    // 初始化所有图片的点击事件
    initializeImageClickListeners();

    // 窗口调整大小时重新初始化
    $(window).resize(function () {
        initializeImageClickListeners(); // 重新初始化图片点击事件和轮播器
    });

    // 左箭头功能
    $('#prev-arrow').on('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
        modalImg.src = currentImages[currentIndex].src;
        captionText.innerHTML = currentImages[currentIndex].alt;
    });

    // 右箭头功能
    $('#next-arrow').on('click', function () {
        currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
        modalImg.src = currentImages[currentIndex].src;
        captionText.innerHTML = currentImages[currentIndex].alt;
    });

    var closeModalButton = document.getElementsByClassName("close")[0];

    if (closeModalButton) {
        closeModalButton.onclick = function () {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            navbar.style.zIndex = originalZIndex;
            detailhouse.style.position = originalDetailposition;

            destroyCarousel();
        };
    }
});
