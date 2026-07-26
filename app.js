/* 코블몬 서버 패치 노트 - 복사 버튼과 테마 토글만 담당합니다. */
(function () {
  "use strict";

  /* ---------- 테마 ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme");
  var dark = window.matchMedia("(prefers-color-scheme: dark)");

  function effective() {
    var saved = root.getAttribute("data-theme");
    if (saved) return saved;
    return dark.matches ? "dark" : "light";
  }

  function paintThemeBtn() {
    if (!themeBtn) return;
    var next = effective() === "dark" ? "라이트" : "다크";
    themeBtn.textContent = next;
    themeBtn.setAttribute("aria-label", next + " 모드로 전환");
  }

  try {
    var stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") root.setAttribute("data-theme", stored);
  } catch (e) { /* 저장소를 못 쓰면 시스템 설정을 그대로 따릅니다 */ }

  paintThemeBtn();
  dark.addEventListener("change", paintThemeBtn);

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = effective() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* 무시 */ }
      paintThemeBtn();
    });
  }

  /* ---------- 복사 ---------- */
  var toast = document.getElementById("toast");
  var toastTimer;

  function say(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-on"); }, 1800);
  }

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function flash(btn, done) {
    var slot = btn.querySelector("[data-copy-label]");
    if (!slot) return;
    if (slot.dataset.busy === "1") return;
    var original = slot.textContent;
    slot.dataset.busy = "1";
    slot.textContent = done;
    setTimeout(function () {
      slot.textContent = original;
      slot.dataset.busy = "";
    }, 1500);
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target;
    if (!t || typeof t.closest !== "function") return;
    var btn = t.closest("[data-copy]");
    if (!btn) return;

    var text = btn.getAttribute("data-copy");
    var done = btn.getAttribute("data-label") || "복사됨";

    function success() { flash(btn, done); say(done); }
    function failure() { say("복사에 실패했습니다. 직접 선택해서 복사해 주세요."); }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(success, function () {
        if (legacyCopy(text)) success(); else failure();
      });
    } else {
      if (legacyCopy(text)) success(); else failure();
    }
  });
})();
