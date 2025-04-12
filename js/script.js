document.addEventListener(`DOMContentLoaded`, function () {
  // AOS
  window.addEventListener(`load`, function () {
    AOS.init();
    AOS.refresh();
  });

  // gsap 스크롤트리거 플러그인
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    markers: false,
  });

  // sticky-video
  document
    .querySelectorAll(".main_intro_sticky")
    .forEach(function (triggerElement, index) {
      const targetElement = triggerElement.querySelector(".video_wrap");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.fromTo(
        targetElement,
        {
          width: "580px",
          height: "380px",
          borderRadius: "15px",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0",
          duration: 1.5,
        }
      );
    });

  // 메인 인트로 스크롤 이벤트
  window.addEventListener("scroll", function () {
    const videoWrap = document.querySelector(".video_wrap");
    const videoFrame = document.querySelector(".video_frame");
    const frameShadow = document.querySelector(".frame_shadow");

    const mainIntroSticky = document.querySelector(".main_intro_sticky");
    const scrollVideo = document.querySelector(
      ".main_intro_sticky .main_video"
    );

    const scrollVideoInner = document.querySelector(
      ".main_intro_sticky .main_video video"
    );
    const mainTitle = document.querySelector(
      ".main_intro_sticky .full_bnr.text_wrap"
    );

    const header = document.querySelector(`.header_area`);

    const scrollHeight = window.scrollY;
    console.log(scrollHeight);

    // const scaleData = (99 / 99950) * scrollHeight + 99851 / 99950;
    const topData = (-10 / 1799) * scrollHeight + 89960 / 1799;

    const storeMain = document.querySelector(`.store_main_bnr`);

    const scrollVideoTopData = (30 / 2999) * scrollHeight + 149920 / 2999;

    scrollVideo.style.top = `${scrollVideoTopData}%`;
    // 50 = a* 1 + b
    // 80 = a * 3000 + b

    if (scrollHeight > 3000) {
      frameShadow.style.display = "none";
      videoFrame.style.opacity = "0";

      scrollVideo.style.position = "static";
      scrollVideo.style.width = "100vw";
      scrollVideo.style.height = "100vh";
      scrollVideo.style.transform = "none";
      scrollVideoInner.style.filter = "brightness(0.8)";

      videoWrap.style.position = "fixed";
      videoWrap.style.top = "0%";
      videoWrap.style.left = "0%";
      videoWrap.style.bottom = "0";
      videoWrap.style.transform = "none";

      mainTitle.classList.add("active");

      // header.classList.add("active");
    } else {
      frameShadow.style.display = "block";
      videoFrame.style.opacity = "1";

      scrollVideo.style.position = "absolute";
      scrollVideo.style.width = "94%";
      scrollVideo.style.height = "";

      scrollVideo.style.transform = "";
      scrollVideoInner.style.filter = "";

      videoWrap.style.position = "fixed";
      videoWrap.style.left = "50%";
      videoWrap.style.top = `${topData}%`;
      videoWrap.style.bottom = "auto";
      videoWrap.style.transform = "translate(-50%, -50%)";

      // header.classList.remove("active");
      mainTitle.classList.remove("active");
    }

    // if (scrollHeight > 3000 && scrollHeight < 4787) {
    //   header.classList.add("active");
    // }

    if (scrollHeight > 6170) {
      videoWrap.style.display = "none";
    } else {
      videoWrap.style.display = "block";
    }

    const endScroll = document.querySelector(`.end_scroll`);
    const storeMainOffsetTop = storeMain.offsetTop;
    const endScrollOffsetTop = endScroll.offsetTop;
    const storeFixed = document.querySelector(`.store_fixed`);

    if (
      scrollHeight > storeMainOffsetTop &&
      scrollHeight < endScrollOffsetTop
    ) {
      storeFixed.classList.add(`active`);
    } else if (scrollHeight < storeMainOffsetTop) {
      storeFixed.classList.remove(`active`);
    }
  });

  // 마우스 휠 헤더 이벤트
  // 마우스 휠 이벤트 (3000px 이후에서만 실행)
  window.addEventListener("wheel", function (event) {
    const header = document.querySelector(`.header_area`);

    // 스크롤 위치가 3000px 이상일 때만 적용
    if (window.scrollY > 1) {
      if (event.deltaY > 0) {
        // 아래로 스크롤 → 헤더 숨김
        header.classList.add(`active`);
      } else {
        // 위로 스크롤 → 헤더 보이기
        header.classList.remove(`active`);
      }
    }
  });
  const header = document.querySelector(`.header_area`);

  header.addEventListener("mouseenter", function () {
    header.classList.remove(`active`);
  });
  header.addEventListener("mouseleave", function () {
    header.classList.add(`active`);
  });

  // swiper

  var swiper = new Swiper(".productSwiper", {
    // cssMode: true,
    loop: true,
    speed: 300,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1 },
      760: { slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1 },
      960: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      1220: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // mousewheel: true,
    keyboard: true,
  });

  const top = document.querySelector(`.header_area .logo`);
  top.addEventListener(`click`, function () {
    window.scrollTo({
      top: 3001,
      behavior: `smooth`,
    });
  });
  // 서브메뉴 이벤트
  const subMenu = document.querySelector(`.sub_menu`);
  const menuBtn = document.querySelector(`.menu_btn`);
  const closeBtn = document.querySelector(`.menu_btn.close`);

  menuBtn.addEventListener(`click`, function () {
    subMenu.classList.add(`active`);
  });
  closeBtn.addEventListener(`click`, function () {
    subMenu.classList.remove(`active`);
  });
}); /* end */
