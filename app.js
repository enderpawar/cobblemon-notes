/* 코블몬 서버 게시판
   목록과 상세를 해시 라우팅으로 그립니다. 글 데이터는 posts.js 에 있습니다. */
(function () {
  "use strict";

  var PER_PAGE = 10;
  var CATS = ["전체", "패치", "안내", "공지"];

  var view  = document.getElementById("view");
  var toast = document.getElementById("toast");

  /* 목록 상태는 글을 보고 돌아왔을 때도 유지됩니다 */
  var state = { q: "", cat: "전체", page: 1 };

  /* ---------- 유틸 ---------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function fmtDate(iso) {
    var p = String(iso).split("-");
    if (p.length !== 3) return esc(iso);
    return p[0] + ". " + p[1] + ". " + p[2] + ".";
  }

  /* 고정글이 위, 그 다음 최신순. posts.js 의 배열 순서는 동점일 때만 씁니다. */
  function ordered() {
    var raw = Array.isArray(window.POSTS) ? window.POSTS.slice() : [];
    return raw
      .map(function (p, i) { return { p: p, i: i }; })
      .sort(function (a, b) {
        if (!!b.p.pinned !== !!a.p.pinned) return b.p.pinned ? 1 : -1;
        if (a.p.date !== b.p.date) return a.p.date < b.p.date ? 1 : -1;
        return a.i - b.i;
      })
      .map(function (x) { return x.p; });
  }

  /* 번호는 고정글을 빼고 오래된 글부터 1번입니다 */
  function numbers(list) {
    var map = {};
    list.filter(function (p) { return !p.pinned; })
        .slice().reverse()
        .forEach(function (p, i) { map[p.id] = i + 1; });
    return map;
  }

  function match(p, q, cat) {
    if (cat !== "전체" && p.cat !== cat) return false;
    if (!q) return true;
    var hay = (p.title + " " + p.summary + " " + p.cat + " " + p.date).toLowerCase();
    return hay.indexOf(q.toLowerCase()) !== -1;
  }

  /* ---------- 목록 ---------- */

  function renderList() {
    var all = ordered();
    var no  = numbers(all);
    var hit = all.filter(function (p) { return match(p, state.q, state.cat); });

    var pages = Math.max(1, Math.ceil(hit.length / PER_PAGE));
    if (state.page > pages) state.page = pages;
    var slice = hit.slice((state.page - 1) * PER_PAGE, state.page * PER_PAGE);

    var h = "";
    h += '<div class="wrap">';

    h += '<div class="board__head">';
    h += '<h1 tabindex="-1">게시판</h1>';
    h += '<p class="board__count">전체 <b>' + all.length + '</b>건';
    if (state.q || state.cat !== "전체") h += ' 중 <b>' + hit.length + '</b>건 표시';
    h += '</p>';
    h += '</div>';

    /* 도구 모음 */
    h += '<div class="toolbar">';
    h += '<div class="cats" role="group" aria-label="분류 필터">';
    CATS.forEach(function (c) {
      h += '<button type="button" class="cat' + (state.cat === c ? " is-on" : "") +
           '" data-cat="' + esc(c) + '"' + (state.cat === c ? ' aria-pressed="true"' : ' aria-pressed="false"') +
           '>' + esc(c) + '</button>';
    });
    h += '</div>';
    h += '<div class="search">';
    h += '<label for="q">검색</label>';
    h += '<input id="q" type="search" placeholder="제목이나 내용 요약으로 검색" value="' + esc(state.q) + '" autocomplete="off">';
    h += '</div>';
    h += '</div>';

    /* 목록 */
    if (!slice.length) {
      h += '<div class="empty">';
      h += '<p class="empty__t">찾는 글이 없습니다</p>';
      h += '<p class="empty__d">검색어를 지우거나 분류를 전체로 바꿔보세요.</p>';
      h += '<button type="button" class="btn btn--primary btn--auto" data-reset>필터 초기화</button>';
      h += '</div>';
    } else {
      h += '<ul class="list">';
      h += '<li class="list__head" aria-hidden="true"><span>번호</span><span>제목</span><span>날짜</span></li>';
      slice.forEach(function (p) {
        h += '<li class="row' + (p.pinned ? " row--pin" : "") + '">';
        h += '<span class="row__no">' + (p.pinned ? '<span class="pin">공지</span>' : no[p.id]) + '</span>';
        h += '<span class="row__title">';
        h += '<a href="#/post/' + encodeURIComponent(p.id) + '">' + esc(p.title) + '</a>';
        h += '</span>';
        h += '<span class="row__date"><time datetime="' + esc(p.date) + '">' + fmtDate(p.date) + '</time></span>';
        h += '</li>';
      });
      h += '</ul>';

      if (hit.length > PER_PAGE) {
        h += '<nav class="pager" aria-label="페이지">';
        for (var i = 1; i <= pages; i++) {
          h += '<button type="button" class="pg' + (i === state.page ? " is-on" : "") +
               '" data-page="' + i + '"' + (i === state.page ? ' aria-current="page"' : '') + '>' + i + '</button>';
        }
        h += '</nav>';
      }
    }

    h += '</div>';
    view.innerHTML = h;
    document.title = "코블몬 서버 게시판";
    wireList();
  }

  function catKey(c) {
    return c === "패치" ? "patch" : c === "공지" ? "notice" : "info";
  }

  function wireList() {
    var input = document.getElementById("q");
    if (input) {
      input.addEventListener("input", function () {
        state.q = input.value;
        state.page = 1;
        var pos = input.selectionStart;
        renderList();
        var again = document.getElementById("q");
        if (again) { again.focus(); try { again.setSelectionRange(pos, pos); } catch (e) {} }
      });
    }
    view.querySelectorAll("[data-cat]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.cat = b.getAttribute("data-cat");
        state.page = 1;
        renderList();
      });
    });
    view.querySelectorAll("[data-page]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.page = parseInt(b.getAttribute("data-page"), 10) || 1;
        renderList();
        window.scrollTo(0, 0);
      });
    });
    var reset = view.querySelector("[data-reset]");
    if (reset) {
      reset.addEventListener("click", function () {
        state = { q: "", cat: "전체", page: 1 };
        renderList();
      });
    }
  }

  /* ---------- 상세 ---------- */

  function renderPost(id) {
    var all = ordered();
    var no  = numbers(all);
    var idx = -1;
    for (var i = 0; i < all.length; i++) { if (all[i].id === id) { idx = i; break; } }

    if (idx === -1) {
      view.innerHTML =
        '<div class="wrap"><div class="empty">' +
        '<p class="empty__t" tabindex="-1">글을 찾을 수 없습니다</p>' +
        '<p class="empty__d">주소가 잘못되었거나 지워진 글입니다.</p>' +
        '<a class="btn btn--primary btn--auto" href="#/">목록으로</a>' +
        '</div></div>';
      document.title = "글 없음 - 코블몬 서버 게시판";
      focusFirst();
      return;
    }

    var p = all[idx];
    var prev = all[idx - 1];  /* 목록에서 위에 있는 글 */
    var next = all[idx + 1];  /* 목록에서 아래에 있는 글 */

    var h = '';
    h += '<div class="wrap wrap--narrow">';
    h += '<a class="back" href="#/">목록으로</a>';

    h += '<article class="post">';
    h += '<header class="post__head">';
    h += '<p class="post__meta">';
    h += '<span class="badge badge--' + catKey(p.cat) + '">' + esc(p.cat) + '</span>';
    h += '<time datetime="' + esc(p.date) + '">' + fmtDate(p.date) + '</time>';
    if (!p.pinned) h += '<span class="post__no">' + no[p.id] + '번</span>';
    h += '</p>';
    h += '<h1 tabindex="-1">' + esc(p.title) + '</h1>';
    h += '<p class="post__sum">' + esc(p.summary) + '</p>';
    h += '</header>';
    /* 본문은 posts.js 에 직접 쓴 HTML 이라 그대로 넣습니다 */
    h += '<div class="post__body">' + p.body + '</div>';
    h += '</article>';

    h += '<nav class="pnav" aria-label="다른 글">';
    h += pnavItem("이전 글", next);
    h += pnavItem("다음 글", prev);
    h += '</nav>';

    h += '</div>';
    view.innerHTML = h;
    document.title = p.title + " - 코블몬 서버 게시판";
    focusFirst();
  }

  function pnavItem(label, p) {
    if (!p) return '<span class="pnav__x"><span class="pnav__k">' + label + '</span><span class="pnav__t">없습니다</span></span>';
    return '<a class="pnav__a" href="#/post/' + encodeURIComponent(p.id) + '">' +
           '<span class="pnav__k">' + label + '</span>' +
           '<span class="pnav__t">' + esc(p.title) + '</span></a>';
  }

  function focusFirst() {
    var t = view.querySelector('[tabindex="-1"]');
    if (t) t.focus({ preventScroll: true });
  }

  /* ---------- 라우터 ---------- */

  function route() {
    var hash = window.location.hash || "#/";
    var m = hash.match(/^#\/post\/(.+)$/);
    if (m) {
      renderPost(decodeURIComponent(m[1]));
      window.scrollTo(0, 0);
    } else {
      renderList();
    }
  }

  window.addEventListener("hashchange", route);

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
    if (!slot || slot.dataset.busy === "1") return;
    var original = slot.textContent;
    slot.dataset.busy = "1";
    slot.textContent = done;
    setTimeout(function () { slot.textContent = original; slot.dataset.busy = ""; }, 1500);
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

  /* ---------- 시작 ---------- */

  if (!Array.isArray(window.POSTS)) {
    view.innerHTML =
      '<div class="wrap"><div class="empty">' +
      '<p class="empty__t" tabindex="-1">글을 불러오지 못했습니다</p>' +
      '<p class="empty__d">posts.js 파일을 읽지 못했습니다. 새로고침해 보시고, 계속 같으면 알려주세요.</p>' +
      '</div></div>';
  } else {
    route();
  }
})();
