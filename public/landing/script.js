(() => {
  const track = document.getElementById("track");
  const spacer = document.getElementById("scroll-spacer");
  const slides = [...document.querySelectorAll(".slide")];
  const diplomaLink = document.querySelector(".about-diploma-cta");
  const leadForm = document.getElementById("lead-form");
  const leadFormStatus = document.getElementById("lead-form-status");
  const customSelects = [...document.querySelectorAll(".custom-select")];
  const desktopQuery = window.matchMedia("(min-width: 901px)");

  let maxScroll = 0;
  let current = 0;
  let target = 0;
  let rafId = 0;
  let touchStartX = 0;
  let touching = false;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function isDesktop() {
    return desktopQuery.matches;
  }

  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function patchDiplomaLinkForMobile() {
    if (!diplomaLink) {
      return;
    }

    if (isMobileDevice()) {
      diplomaLink.setAttribute("href", "/landing/diplom-mobile.html");
    } else {
      diplomaLink.setAttribute("href", "/landing/diplom.pdf#zoom=25");
    }
  }

  function updateDimensions() {
    if (!isDesktop()) {
      document.body.style.height = "auto";
      spacer.style.display = "none";
      track.style.width = "100%";
      track.style.transform = "translate3d(0,0,0)";
      return;
    }

    spacer.style.display = "block";
    track.style.width = `${slides.length * 100}vw`;
    maxScroll = window.innerWidth * (slides.length - 1);
    spacer.style.height = `${window.innerHeight + maxScroll}px`;
    target = clamp(target, 0, maxScroll);
    current = clamp(current, 0, maxScroll);
  }

  function goToSlideById(id) {
    if (!id || !isDesktop()) {
      return;
    }

    const index = slides.findIndex((slide) => slide.id === id);
    if (index < 0) {
      return;
    }

    target = clamp(index * window.innerWidth, 0, maxScroll);
    ensureAnimation();
  }

  function animate() {
    if (!isDesktop()) {
      rafId = 0;
      return;
    }

    current += (target - current) * 0.1;
    if (Math.abs(target - current) < 0.08) {
      current = target;
    }

    track.style.transform = `translate3d(${-current}px, 0, 0)`;
    rafId = requestAnimationFrame(animate);
  }

  function ensureAnimation() {
    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  }

  function onWheel(event) {
    if (!isDesktop()) {
      return;
    }

    event.preventDefault();
    target = clamp(target + event.deltaY * 1.08, 0, maxScroll);
    ensureAnimation();
  }

  function onTouchStart(event) {
    if (!isDesktop()) {
      return;
    }

    touching = true;
    touchStartX = event.touches[0].clientX;
  }

  function onTouchMove(event) {
    if (!isDesktop() || !touching) {
      return;
    }

    const x = event.touches[0].clientX;
    const delta = touchStartX - x;
    touchStartX = x;
    target = clamp(target + delta * 1.7, 0, maxScroll);
    ensureAnimation();
  }

  function onTouchEnd() {
    touching = false;
  }

  function onResize() {
    updateDimensions();
    ensureAnimation();
  }

  function onAnchorClick(event) {
    const link = event.target.closest("a[href^='#']");
    if (!link) {
      return;
    }

    // On mobile stacked layout, keep native vertical anchor scrolling.
    if (!isDesktop()) {
      return;
    }

    const id = link.getAttribute("href")?.slice(1);
    if (!id) {
      return;
    }

    event.preventDefault();
    goToSlideById(id);
  }

  function onHashChange() {
    const id = window.location.hash.replace("#", "");
    goToSlideById(id);
  }

  function trackEvent(eventName, payload = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });
  }

  function onTrackedClick(event) {
    const link = event.target.closest("[data-track]");
    if (!link) {
      return;
    }

    trackEvent("landing_click", {
      target: link.getAttribute("data-track") || "unknown"
    });
  }

  function onLeadFormSubmit(event) {
    if (!leadForm) {
      return;
    }

    event.preventDefault();
    const formData = new FormData(leadForm);
    const name = (formData.get("name") || "").toString().trim();
    const contact = (formData.get("contact") || "").toString().trim();
    const goal = (formData.get("goal") || "").toString().trim();
    const level = (formData.get("level") || "").toString().trim();
    const note = (formData.get("note") || "").toString().trim();

    if (leadFormStatus) {
      leadFormStatus.textContent = "";
    }

    if (!name || !contact || !goal || !level) {
      trackEvent("lead_form_invalid", { reason: "required_fields" });
      if (leadFormStatus) {
        leadFormStatus.textContent = "Заполните имя, контакт, цель и уровень.";
      }
      return;
    }

    trackEvent("lead_form_submit", { goal, level, channel: "api" });

    fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        contact,
        goal: `${goal} | ${level}`,
        schedule: note || "-"
      })
    })
      .then(async (response) => {
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || payload?.ok === false) {
          throw new Error(payload?.message || "Ошибка отправки");
        }

        if (leadFormStatus) {
          leadFormStatus.textContent = "Анкета отправлена. Я напишу вам в личные сообщения @Maria_fit_Kochneva.";
        }
        leadForm.reset();
        customSelects.forEach((select) => {
          const trigger = select.querySelector(".custom-select-trigger");
          const hidden = select.querySelector("input[type='hidden']");
          if (trigger && hidden) {
            trigger.textContent = hidden.name === "goal" ? "Выберите цель" : "Выберите уровень";
          }
        });
      })
      .catch((error) => {
        if (leadFormStatus) {
          leadFormStatus.textContent = error.message || "Не удалось отправить анкету. Попробуйте еще раз.";
        }
      });
  }

  function closeCustomSelects(except) {
    customSelects.forEach((select) => {
      if (select !== except) {
        select.classList.remove("open");
      }
    });
  }

  function setupCustomSelects() {
    customSelects.forEach((select) => {
      const trigger = select.querySelector(".custom-select-trigger");
      const hidden = select.querySelector("input[type='hidden']");
      const options = [...select.querySelectorAll(".custom-select-option")];

      if (!trigger || !hidden || options.length === 0) {
        return;
      }

      trigger.addEventListener("click", () => {
        const isOpen = select.classList.contains("open");
        closeCustomSelects(select);
        if (!isOpen) {
          select.classList.add("open");
        }
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const value = option.getAttribute("data-value") || "";
          hidden.value = value;
          trigger.textContent = value;
          select.classList.remove("open");
        });
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      if (!target.closest(".custom-select")) {
        closeCustomSelects(null);
      }
    });
  }

  patchDiplomaLinkForMobile();
  setupCustomSelects();
  updateDimensions();
  ensureAnimation();

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("touchend", onTouchEnd, { passive: true });
  window.addEventListener("resize", onResize);
  document.addEventListener("click", onAnchorClick);
  document.addEventListener("click", onTrackedClick);
  window.addEventListener("hashchange", onHashChange);

  if (leadForm) {
    leadForm.addEventListener("submit", onLeadFormSubmit);
  }
})();
