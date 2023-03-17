/////////////////COOKIE-CONSENT////////////////

window.onload = function () {
  var cookieBanner = document.getElementById("cookie-banner");
  var acceptButton = document.getElementById("cookie-accept");
  var rejectButton = document.getElementById("cookie-reject");
  var consentCookie = localStorage.getItem("cookie_consent");

  if (consentCookie === "accepted") {
    function handleCookieConsent() {
      cookieBanner.style.display = "none";
      // Allow cookies from Google Analytics
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.setAttribute("data-cookieconsent", "accepted"); // add cookie consent attribute
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "//www.google-analytics.com/analytics.js",
        "ga"
      );

      ga("create", "UA-40122070-1", "nokkakivi.fi");
      ga("send", "pageview");

      // Allow cookies from YouTube video embed
      var youtubeEmbeds = document.querySelectorAll(
        'iframe[src*="youtube.com"]'
      );
      youtubeEmbeds.forEach(function (embed) {
        embed.setAttribute("data-cookieconsent", "accepted");
      });
    }
    handleCookieConsent();
  } else if (consentCookie === "rejected") {
    cookieBanner.style.display = "none";
  } else {
    cookieBanner.style.display = "flex";
  }

  acceptButton.addEventListener("click", function () {
    // Set cookie consent to accepted and hide banner
    localStorage.setItem("cookie_consent", "accepted");
    cookieBanner.style.display = "none";

    // Set cookie to expire in 1 year
    var expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie =
      "cookie_consent=accepted; expires=" +
      expiryDate.toUTCString() +
      "; path=/; SameSite=None; Secure";
    handleCookieConsent();
  });

  rejectButton.addEventListener("click", function () {
    // Set cookie consent to rejected and hide banner
    localStorage.setItem("cookie_consent", "rejected");
    document.cookie = "cookie_consent=rejected; path=/; SameSite=None; Secure";
    cookieBanner.style.display = "none";
  });
};

/////////////////////////////////////////////KALENTERI
if (
  window.location.pathname.endsWith("/index.html") ||
  window.location.pathname === "/" ||
  window.location.pathname === "/Nokkakivi/"
) {
  const date = new Date();

  const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "Tammikuu",
      "Helmikuu",
      "Maaliskuu",
      "Huhtikuu",
      "Toukokuu",
      "Kesäkuu",
      "Heinäkuu",
      "Elokuu",
      "Syyskuu",
      "Lokakuu",
      "Marraskuu",
      "Joulukuu",
    ];
    ///////////////OPEN DAYS:::::::::::PUISTO AVOINNA MUOKKAA TÄHÄN AUKIOLOT:::::::////////////////
    ////////////////////////////////OLTAVA TÄSMÄLLEEN SAMASSA MUODOSSA TAI EI TOIMI///////////////////////

    const openDays = [
      "7.6.2023",
      "8.6.2023",
      "9.6.2023",
      "10.6.2023",
      "11.6.2023",
      "13.6.2023",
      "14.6.2023",
      "15.6.2023",
      "16.6.2023",
      "17.6.2023",
      "18.6.2023",
      "20.6.2023",
      "21.6.2023",
      "22.6.2023",
      "25.6.2023",
      "27.6.2023",
      "28.6.2023",
      "29.6.2023",
      "30.6.2023",
      "1.7.2023",
      "2.7.2023",
      "4.7.2023",
      "5.7.2023",
      "6.7.2023",
      "7.7.2023",
      "8.7.2023",
      "9.7.2023",
      "11.7.2023",
      "12.7.2023",
      "13.7.2023",
      "14.7.2023",
      "15.7.2023",
      "16.7.2023",
      "18.7.2023",
      "19.7.2023",
      "20.7.2023",
      "21.7.2023",
      "22.7.2023",
      "23.7.2023",
      "25.7.2023",
      "26.7.2023",
      "27.7.2023",
      "28.7.2023",
      "29.7.2023",
      "30.7.2023",
      "1.8.2023",
      "2.8.2023",
      "3.8.2023",
      "4.8.2023",
      "5.8.2023",
      "8.8.2023",
      "12.8.2023",
      "13.8.2023",
      "19.8.2023",
      "26.8.2023",
    ];

    ////////////////////////GIVES NAME OF THE MONTH IN HTML//////////////////////////
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    /////////////////////SETS TIME IN FINNISH//////////////////////////////
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      locale: "fi-FI",
    };
    const dateFi = new Date();
    const dateString = new Intl.DateTimeFormat("fi-FI", options).format(dateFi);

    document.querySelector(".date p").innerHTML = dateString;
    /////////////////LOOPS THAT RENDER PREVIOUS MONTH DAYS :: TODAY ::  IF TODAY= OPEN DAYS RENDERS OPEN POPUP
    //RENER GREEN OPEN DAYS:: RENDER NUMBERS OF DAYS IN MONTH //////////////////////////
    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      const prevDate = `${
        prevLastDay - x + 1
      }.${date.getMonth()}.${date.getFullYear()}`;
      if (openDays.includes(prevDate)) {
        days += `<div class="open prev-date">${prevLastDay - x + 1}</div>`;
      } else {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
      }
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
      } else if (
        openDays.includes(`${i}.${date.getMonth() + 1}.${date.getFullYear()}`)
      ) {
        days += `<div class="open">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }
    /////////////////////////TELLS IF TODAY IS OPEN OR NOT TEKSTIÄÄ VOI MUUTTAA HTML KALENTERI OSIOSSA OPEN-TEXT/////////////////////////////////////////
    let today = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let currentDay = `${today}.${month}.${year}`;

    if (openDays.includes(currentDay)) {
      document.querySelector(".open-text").style.display = "block";
    }

    /////////////////////////RENDERS COUPLE NEXT MONTHS DAYS/////////////////////////////////////////
    for (let j = 1; j <= nextDays; j++) {
      const nextDate = `${j}.${date.getMonth() + 2}.${date.getFullYear()}`;
      if (openDays.includes(nextDate)) {
        days += `<div class="open next-date">${j}</div>`;
      } else {
        days += `<div class="next-date">${j}</div>`;
      }
    }
    monthDays.innerHTML = days;
  };
  /////////////////////NEXT AND PREV MONTH ON CLICK////////////////////////////////////
  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();

  //////////////////HERE WE CHECK IF CLICKED DAYS IS BELOW JUNE 22 AND IF DAY IS OPEN THEN SAY IT BY DISPLAYING DIV/////////////////////////////////////////////////////////////
  const clickedDays = document.querySelector(".days");
  const clickedDay = document.querySelector(".clicked-day");
  let timeoutId;

  clickedDays.addEventListener("click", (event) => {
    // immediatly return if click doesnt contain day /
    if (event.target === clickedDays) return;
    //
    else if (event.target.classList.contains("open")) {
      // Code to handle click on an open day // tästä säädät klikatun tekstin riippuen onko juhannusaukioloajat ym tai suljettu

      if (
        document.querySelector(".date h1").innerHTML === "Kesäkuu" &&
        event.target.innerText < 23 &&
        event.target.innerText > 5
      ) {
        // koodi ennen juhannusta olevalle aukiololle    kesäkuu       pienempi kuin 23 päivä eli juhannus 22päivä &&(ja) suurempi kuin 5 päivä
        clickedDay.style.display = "block";
        clickedDay.style.backgroundColor = "#7ef596";
        clickedDay.textContent = "Avoinna klo 11-17! Tervetuloa";
      } else {
        clickedDay.style.display = "block";
        clickedDay.style.backgroundColor = "#7ef596";
        clickedDay.textContent = "Avoinna klo 11-18! Tervetuloa";
      }
    } else {
      // Code to handle click on a non-open day
      clickedDay.style.display = "block";
      clickedDay.style.backgroundColor = "rgb(218 211 219)";
      clickedDay.textContent = "Valitsemasi päivä olemme suljettu";
      console.log(event);
    }

    clearTimeout(timeoutId); // Cancel previous timeout
    timeoutId = setTimeout(() => {
      clickedDay.style.display = "none";
    }, 9000);
  });
}
/////////////////////////// ////////////////////////////////////////////
//////////////////////////// NAVIGATION SCRIPT//////////////////////////
/////////////////////////// ////////////////////////////////////////////

const links = document.querySelectorAll(".navigation-bar");
const toggle = document.getElementById("toggle");
const label = document.querySelector("label");

links.forEach((link) => {
  const dropDownMenusActive = document.querySelectorAll(
    ".dropdown-menu.active"
  );
  link.addEventListener("click", () => {
    ///////////////checks when user clicks nav-bar links and if they click link that is not active dropdown menu it closes navbar/////////////
    if (toggle.checked && dropDownMenusActive.length > 0) {
      toggle.checked = false;
      label.innerHTML = "&#9776;";
    }
  });
});

const soloLinks = document.querySelectorAll('[data-class="singleLink"]');
soloLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (toggle.checked) {
      toggle.checked = false;
      label.innerHTML = "&#9776;";
    }
  });
});

///////////////toggles open and close buttons///////////
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    label.innerHTML = "&times;";
  } else {
    label.innerHTML = "&#9776;";
  }
});

//this part of script activates dropdown menu on clicks insteead hover when screen width is enought low
const dropdownLinks = document.querySelectorAll(".dropdown-link");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
//
//   dropdownLinks.forEach((link, index) => {
//     link.addEventListener("click", (event) => {
//       // Check if the link's parent li element has a dropdown menu
//       const hasDropdownMenu = link.parentNode.querySelector(".dropdown-menu");

//       // Only prevent default if the link has a dropdown menu
//       if (
//         hasDropdownMenu &&
//         !dropdownMenus[index].classList.contains("active")
//       ) {
//         event.preventDefault();
//         dropdownMenus.forEach((menu) => menu.classList.remove("active"));
//         dropdownMenus[index].classList.add("active");
//       }
//     });
//   });
//
if (window.matchMedia("(max-width: 60em)").matches) {
  const navbar = document.querySelector(".navigation-bar");
  navbar.addEventListener("click", function (e) {
    const dropdownMenu = e.target.nextElementSibling;

    if (!e.target.classList.contains("dropdown-link")) {
      return;
    }

    if (e.target.classList.contains("dropdown-link")) {
      e.preventDefault();
      dropdownMenus.forEach(function (menu) {
        menu.classList.remove("active");
      });
    }
    dropdownMenu.classList.add("active");
  });
}
/////////////////////////// ////////////////////////////////////////////
////////////////////////////RIDESLIST-POPUP//////////////////////////
/////////////////////////// ////////////////////////////////////////////

if (window.location.pathname.endsWith("/laitteet.html")) {
  const cards = document.querySelectorAll(".card");
  const modal = document.querySelector(".modal");
  const modalTitle = modal.querySelector(".modal-title");

  const modalImg = modal.querySelector(".modal-img");
  const modalInfo = modal.querySelector(".modal-info");
  const modalHeightalone = modal.querySelector('[data-attr="modal-alone"]');
  const modalHeightParent = modal.querySelector('[data-attr="modal-parent"]');

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Clears image between clicks //
      modalImg.setAttribute("src", "");

      // Get the data for the clicked card
      const title = card.querySelector(".card__title").textContent;

      const imgSrc = card.getAttribute("data-img");
      const info = card.querySelector(".info").textContent;
      const aloneHeight = card.querySelector(
        '.card__pituusraja[data-attr="alone"]'
      ).textContent;
      const parentHeight = card.querySelector(
        '.card__pituusraja[data-attr="parent"]'
      ).textContent;

      // Set the content of the modal window
      modalTitle.textContent = title;

      modalImg.setAttribute("src", imgSrc);
      modalInfo.textContent = info;
      modalHeightalone.textContent = aloneHeight;
      modalHeightParent.textContent = parentHeight;
      // Display the modal window
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal-content");
    const closeButton = event.target.closest(".close-modal");

    if (modalContent !== null && closeButton === null) {
      // Click was inside the modal content, don't close the modal
      return;
    } else {
      // Click was outside the modal content or on the close button, close the modal
      modal.style.display = "none";
    }
  });

  const modalBtn = document.querySelector(".btn-heightlimits");
  const heightModal = document.querySelector(".modal__heightlimits");

  modalBtn.addEventListener("click", () => {
    heightModal.style.display = "block";
  });

  heightModal.addEventListener("click", (event) => {
    const modalTable = event.target.closest(".heightlimits__img");
    const closeTable = event.target.closest(".close-modal");
    if (modalTable !== null && closeTable === null) {
      return;
    } else {
      heightModal.style.display = "none";
    }
  });

  ////////////////////////////CAROUSEL//////////////////////////
  /////////////////////////// ////////////////////////////////////////////

  let slidePosition = 0;

  const slides = document.getElementsByClassName("carousel__item");
  const totalSlides = slides.length;
  let timerId = null;
  // click activates move to next or prev slide
  document
    .getElementById("carousel__button--next")
    .addEventListener("click", function () {
      moveToNextSlide();
      resetTimer();
    });

  document
    .getElementById("carousel__button--prev")
    .addEventListener("click", function () {
      moveToPrevSlide();
      resetTimer();
    });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove("carousel__item--visible");
      slide.classList.add("carousel__item--hidden");
    }
    slides[slidePosition].classList.add("carousel__item--visible");
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
  }
  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
    updateSlidePosition();
  }

  function resetTimer() {
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setInterval(function () {
      moveToNextSlide();
    }, 5000);
  }

  resetTimer();
}
if (window.location.pathname.endsWith("/hinnasto.html")) {
  const modalBtn = document.querySelector(".btn-heightlimits");
  const heightModal = document.querySelector(".modal__heightlimits");

  modalBtn.addEventListener("click", () => {
    heightModal.style.display = "block";
  });

  heightModal.addEventListener("click", (event) => {
    const modalTable = event.target.closest(".heightlimits__img");
    const closeTable = event.target.closest(".close-modal");
    if (modalTable !== null && closeTable === null) {
      return;
    } else {
      heightModal.style.display = "none";
    }
  });
}

/////////////////////////FAQ JA TYÖNHAKU////////////////////////////////
if (window.location.pathname.endsWith("/info.html")) {
  // get all accordion links
  const accordionLinks = document.querySelectorAll(".accordion-link");

  // add click event listener to each link
  accordionLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // prevent default link behavior

      const ansver = this.parentNode.querySelector(".ansver");
      ansver.classList.toggle("open");

      const plusMinus = this.querySelector(".plus");
      if (ansver.classList.contains("open")) {
        plusMinus.textContent = "-";
      } else {
        plusMinus.textContent = "+";
      }
    });
  });
}

let date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
