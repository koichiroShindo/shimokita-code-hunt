(function () {
  var C = window.CONFIG, STORES = window.STORES, TEXT = window.TEXT, LANGS = window.LANGS;
  var KEY = "shimokita-guide";
  var app = document.getElementById("app");
  var CATS = Object.keys(TEXT.en.cat);
  // ファッション（古着）の系統と、それ以外の種類
  var FASHION = ["amekaji", "y2kstreet", "sports", "euro", "mode", "graphic", "remake"];
  var OTHER = CATS.filter(function (c) { return FASHION.indexOf(c) < 0; });

  /* ---- 保存（端末のブラウザに記録する） ---- */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  var state = load();

  /* ---- 言語 ---- */
  function pickLang() {
    if (state.lang && TEXT[state.lang]) return state.lang;
    var full = (navigator.language || "en").toLowerCase();
    if (/^zh-(tw|hk|mo|hant)/.test(full)) return "zh-Hant";
    var code = full.slice(0, 2);
    return TEXT[code] ? code : "en";
  }
  var lang = pickLang();
  function t(key, vars) {
    var s = TEXT[lang][key];
    if (s === undefined) s = TEXT.en[key];
    if (typeof s === "string") {
      vars = vars || {};
      vars.site = vars.site || C.siteName;
      s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    }
    return s;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---- お店 ---- */
  function shopsIn(cat) {
    return STORES.filter(function (s) { return s.categories.indexOf(cat) >= 0; });
  }
  // 選んだスタイルに入るお店をすべて出す。選んだ順に並べ、2つのスタイルに入るお店は1回だけ出す
  function shopsFor(prefs) {
    var list = [];
    prefs.forEach(function (c) {
      shopsIn(c).forEach(function (s) { if (list.indexOf(s) < 0) list.push(s); });
    });
    return list;
  }
  // そのスタイルを表す写真。主なスタイルがそれのお店を優先する
  function stylePhoto(cat) {
    if (C.stylePhotos && C.stylePhotos[cat]) return C.stylePhotos[cat];
    var list = shopsIn(cat).filter(function (s) { return s.photo; });
    var main = list.filter(function (s) { return s.categories[0] === cat; });
    var s = main[0] || list[0];
    return s ? "images/shops/" + s.photo : null;
  }

  /* ---- 共通の部品 ---- */
  function header() {
    return '<header class="top"><div class="top-in">' +
      '<a class="brand" href="./" data-go="home">' + esc(C.siteName) + "</a>" +
      '<nav class="nav" aria-label="Menu">' +
      '<a href="#styles" data-go="home" data-anchor="styles">' + t("navStyles") + "</a>" +
      (state.prefs && state.prefs.length ? '<a href="#list" data-go="list">' + t("navList") + "</a>" : "") +
      '<a href="#about" data-go="about">' + t("navAbout") + "</a></nav>" +
      langMenu() + "</div></header>";
  }
  function flag(l) { return '<img class="flag" src="images/flags/' + l.flag + '.svg" alt="" width="20" height="15">'; }
  function langMenu() {
    var cur = LANGS.filter(function (l) { return l.code === lang; })[0];
    return '<details class="langs"><summary aria-label="Language">' + flag(cur) + "<span>" + cur.label + "</span></summary>" +
      '<ul class="lang-list">' + LANGS.map(function (l) {
        return '<li><button type="button" lang="' + l.code + '" data-lang="' + l.code + '"' +
          (l.code === lang ? ' aria-current="true"' : "") + ">" + flag(l) + "<span>" + l.label + "</span></button></li>";
      }).join("") + "</ul></details>";
  }

  function footer() {
    return '<footer class="foot"><div class="wrap foot-in">' +
      '<p class="foot-brand">' + esc(C.siteName) + "</p>" +
      '<dl class="foot-info">' +
      "<div><dt>" + t("operatorLabel") + "</dt><dd>" + esc(C.operator[lang] || C.operator.en) + "</dd></div>" +
      "<div><dt>" + t("contactLabel") + '</dt><dd><a href="mailto:' + esc(C.contact) + '">' + esc(C.contact) + "</a></dd></div>" +
      "</dl>" +
      '<p class="foot-links"><a href="#about" data-go="about">' + t("navAbout") + "</a></p>" +
      '<p class="foot-copy">© ' + esc(C.operator.en) + "</p>" +
      "</div></footer>";
  }

  /* ---- トップの写真（自動で切り替わる） ---- */
  var slides = (function () {
    // 小さい写真（slide: false）はぼやけるので使わない
    var list = STORES.filter(function (s) { return s.photo && s.slide !== false; });
    for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = list[i]; list[i] = list[j]; list[j] = x; }
    return list.slice(0, 8);
  })();
  var slideIndex = 0, slideTimer = null;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var slidePlaying = !reduceMotion;

  function heroSlides() {
    return '<section class="hero" aria-roledescription="carousel" aria-label="' + t("slidesLabel") + '">' +
      '<div class="slides">' + slides.map(function (s, i) {
        return '<figure class="slide' + (i === slideIndex ? " is-on" : "") + '" aria-hidden="' + (i === slideIndex ? "false" : "true") + '">' +
          '<img src="images/shops/' + esc(s.photo) + '" alt="' + esc(s.name) + '"' + (i < 2 ? "" : ' loading="lazy"') + ">" +
          '<figcaption class="slide-name">' + esc(s.name) + "</figcaption></figure>";
      }).join("") + "</div>" +
      '<div class="hero-text"><p class="hero-name">' + esc(C.siteName) + "</p>" +
      '<h1 class="hero-line">' + t("tagline") + "</h1></div>" +
      '<div class="slide-ctrl">' +
      '<button type="button" class="slide-btn" data-slide="prev" aria-label="' + t("slidePrev") + '"><span class="arrow arrow-l"></span></button>' +
      '<div class="dots">' + slides.map(function (s, i) {
        return '<button type="button" class="dot' + (i === slideIndex ? " is-on" : "") + '" data-slide="' + i + '" aria-label="' + (i + 1) + " / " + slides.length + '"></button>';
      }).join("") + "</div>" +
      '<button type="button" class="slide-btn" data-slide="next" aria-label="' + t("slideNext") + '"><span class="arrow arrow-r"></span></button>' +
      '<button type="button" class="slide-btn slide-play" data-slide="toggle" aria-label="' + (slidePlaying ? t("slidePause") : t("slidePlay")) + '">' +
      '<span class="' + (slidePlaying ? "icon-pause" : "icon-play") + '"></span></button>' +
      "</div></section>";
  }
  function goSlide(i) {
    var figs = app.querySelectorAll(".slide"), dots = app.querySelectorAll(".dot");
    if (!figs.length) return;
    slideIndex = (i + slides.length) % slides.length;
    for (var k = 0; k < figs.length; k++) {
      figs[k].classList.toggle("is-on", k === slideIndex);
      figs[k].setAttribute("aria-hidden", k === slideIndex ? "false" : "true");
      dots[k].classList.toggle("is-on", k === slideIndex);
    }
  }
  function startSlides() {
    stopSlides();
    if (slidePlaying && slides.length > 1) slideTimer = setInterval(function () { goSlide(slideIndex + 1); }, 5000);
  }
  function stopSlides() { if (slideTimer) { clearInterval(slideTimer); slideTimer = null; } }
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopSlides(); else if (view === "home") startSlides();
  });

  /* ---- 画面：トップ（スタイルを選ぶ） ---- */
  var sel = [];

  function viewHome() {
    var resume = (state.prefs && state.prefs.length)
      ? '<p class="resume"><a href="#list" data-go="list">' + t("resume") + " →</a></p>"
      : "";
    return heroSlides() +
      '<div class="wrap">' + resume +
      '<section class="pick" id="styles">' +
      '<h2 class="h-sec">' + t("prefsTitle") + "</h2>" +
      '<p class="sub">' + t("prefsLead") + "</p>" +
      '<form id="prefs">' +
      tileGroup(t("fashionTitle"), t("fashionLead"), FASHION.filter(function (c) { return shopsIn(c).length; })) +
      tileGroup(t("otherTitle"), "", OTHER.filter(function (c) { return shopsIn(c).length; })) +
      '<div class="pick-bar' + (sel.length ? " is-on" : "") + '"><div class="pick-bar-in">' +
      '<span class="pick-count">' + t("selectedCount", { n: sel.length }) + "</span>" +
      '<button type="submit" class="btn btn-go"' + (sel.length ? "" : " disabled") + ">" + t("prefsSubmit") + "</button>" +
      "</div></div></form></section>" +
      mapSection() + "</div>";
  }

  function tileGroup(title, lead, cats) {
    return '<fieldset class="tiles-group"><legend class="h-group">' + title + "</legend>" +
      (lead ? '<p class="sub">' + lead + "</p>" : "") + '<div class="tiles">' +
      cats.map(function (c) {
        var p = stylePhoto(c);
        return '<label class="tile' + (p ? "" : " no-photo") + '">' +
          '<input type="checkbox" name="cat" value="' + c + '"' + (sel.indexOf(c) >= 0 ? " checked" : "") + ">" +
          (p ? '<img src="' + esc(p) + '" alt="" loading="lazy">' : "") +
          '<span class="tile-label"><span class="tile-name">' + t("cat")[c] + "</span>" +
          '<span class="tile-count">' + t("shopsCount", { n: shopsIn(c).length }) + "</span></span>" +
          '<span class="tile-check" aria-hidden="true"></span></label>';
      }).join("") + "</div></fieldset>";
  }

  // 下北沢駅のまわりの地図（OpenStreetMap）
  var STATION = { lat: 35.6615, lng: 139.6683 };
  function mapSection() {
    var d = 0.006;
    var bbox = [STATION.lng - d * 1.2, STATION.lat - d, STATION.lng + d * 1.2, STATION.lat + d].join(",");
    var src = "https://www.openstreetmap.org/export/embed.html?bbox=" + bbox +
      "&layer=mapnik&marker=" + STATION.lat + "," + STATION.lng;
    return '<section class="map" id="map"><h2 class="h-sec">' + t("mapTitle") + "</h2>" +
      '<p class="sub">' + t("mapLead") + "</p>" +
      '<iframe title="' + t("mapTitle") + '" src="' + src + '" loading="lazy"></iframe>' +
      '<p class="map-credit">© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors</p>' +
      '<a class="link" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent("Shimokitazawa Station") +
      '" target="_blank" rel="noopener">' + t("mapOpen") + "</a></section>";
  }

  /* ---- 画面：選んだスタイルのお店 ---- */
  // 駅から順に回る、歩きの道順（Googleマップ）。経由地の上限があるので10軒以下のときだけ出す
  function routeLink(list) {
    if (list.length > 10) return "";
    var place = function (s) { return s.lat != null ? s.lat + "," + s.lng : s.name + " " + s.address; };
    var url = "https://www.google.com/maps/dir/?api=1&travelmode=walking" +
      "&origin=" + encodeURIComponent("Shimokitazawa Station") +
      "&destination=" + encodeURIComponent(place(list[list.length - 1])) +
      (list.length > 1 ? "&waypoints=" + encodeURIComponent(list.slice(0, -1).map(place).join("|")) : "");
    return '<a class="btn btn-line" href="' + url + '" target="_blank" rel="noopener">' + t("routeMap") + "</a>";
  }

  // お店の公式SNS・サイトへのリンク
  var LINK_NAMES = { instagram: "Instagram", x: "X", threads: "Threads", facebook: "Facebook" };
  function linkList(links) {
    if (!links) return "";
    return ["instagram", "x", "threads", "facebook", "web"].filter(function (k) { return links[k]; }).map(function (k) {
      return '<a class="link link-sub" href="' + esc(links[k]) + '" target="_blank" rel="noopener">' +
        '<img class="icon" src="images/icons/' + k + '.svg" alt="" width="16" height="16">' + (LINK_NAMES[k] || t("website")) + "</a>";
    }).join("");
  }

  function storeItem(s, i) {
    var desc = (s.desc && (s.desc[lang] || s.desc.en)) || "";
    var map = "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(s.lat != null ? s.lat + "," + s.lng : s.name + " " + s.address);
    return '<li class="shop' + (s.photo ? "" : " no-photo") + '">' +
      (s.photo ? '<figure class="shop-photo"><img src="images/shops/' + esc(s.photo) + '" alt="' + esc(s.name) + '" loading="lazy"></figure>' : "") +
      '<div class="shop-body">' +
      '<div class="shop-head"><span class="shop-no">' + (i + 1) + "</span>" +
      "<h3>" + esc(s.name) + "</h3></div>" +
      '<p class="cats">' + s.categories.map(function (c) { return t("cat")[c]; }).join(" / ") + "</p>" +
      (desc ? '<p class="desc">' + esc(desc) + "</p>" : "") +
      '<p class="addr" lang="ja">' + esc(s.address) + "</p>" +
      '<p class="shop-links"><a class="link" href="' + map + '" target="_blank" rel="noopener">' + t("map") + "</a>" +
      linkList(s.links) + "</p></div></li>";
  }

  function viewList() {
    var prefs = state.prefs || [];
    var list = shopsFor(prefs);
    if (!list.length) { view = "home"; return viewHome(); }
    // 選んだスタイルそれぞれの写真を横に並べる（写真のないスタイルは飛ばす。最大4枚）
    var heroes = prefs.map(stylePhoto).filter(Boolean).slice(0, 4);
    if (!heroes.length) heroes = ["images/street/street-1.jpg"];
    return '<section class="banner"><div class="banner-photos n' + heroes.length + '">' +
      heroes.map(function (h) { return '<img src="' + esc(h) + '" alt="">'; }).join("") + "</div>" +
      '<div class="banner-text"><p class="banner-kicker">' + prefs.map(function (c) { return t("cat")[c]; }).join(" · ") + "</p>" +
      '<h1 class="banner-title">' + t("listTitle") + "</h1></div></section>" +
      '<div class="wrap route">' +
      '<p class="list-count">' + t("listCount", { n: list.length }) + "</p>" +
      routeLink(list) +
      '<ol class="shops">' + list.map(storeItem).join("") + "</ol>" +
      '<button type="button" class="btn btn-line" data-action="change">' + t("change") + "</button>" +
      "</div>";
  }

  /* ---- 画面：このサイトについて ---- */
  function viewAbout() {
    return '<div class="wrap about">' +
      '<h1 class="h-page">' + t("aboutTitle") + "</h1>" +
      t("aboutBody").map(function (p) { return "<p>" + p.replace(/\{site\}/g, esc(C.siteName)) + "</p>"; }).join("") +
      '<h2 class="h-sec">' + t("operatorTitle") + "</h2>" +
      '<dl class="about-info">' +
      "<div><dt>" + t("operatorLabel") + "</dt><dd>" + esc(C.operator[lang] || C.operator.en) + "</dd></div>" +
      "<div><dt>" + t("contactLabel") + '</dt><dd><a href="mailto:' + esc(C.contact) + '">' + esc(C.contact) + "</a></dd></div>" +
      "</dl>" +
      '<h2 class="h-sec">' + t("infoTitle") + "</h2><p>" + t("infoBody") + "</p>" +
      '<h2 class="h-sec">' + t("privacyTitle") + "</h2><p>" + t("privacyBody") + "</p>" +
      '<h2 class="h-sec">' + t("rightsTitle") + "</h2><p>" + t("rightsBody", { name: esc(C.operator[lang] || C.operator.en) }) + "</p>" +
      '<button type="button" class="btn btn-line" data-go="home">' + t("backTop") + "</button></div>";
  }

  var view = "home";
  function render(body) {
    document.documentElement.lang = lang;
    document.title = view === "about" ? t("aboutTitle") + " | " + C.siteName : C.siteName;
    app.className = "view-" + view;
    app.innerHTML = header() + '<main id="main">' + body + "</main>" + footer();
    if (view === "home") startSlides(); else stopSlides();
  }
  function show(name, anchor) {
    view = name;
    if (name === "list") render(viewList());
    else if (name === "about") render(viewAbout());
    else { view = "home"; render(viewHome()); }
    var target = anchor && document.getElementById(anchor);
    if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
  }

  /* ---- 操作 ---- */
  function updateBar() {
    var bar = app.querySelector(".pick-bar");
    if (!bar) return;
    bar.classList.toggle("is-on", sel.length > 0);
    bar.querySelector(".pick-count").textContent = t("selectedCount", { n: sel.length });
    bar.querySelector("button").disabled = !sel.length;
  }

  app.addEventListener("change", function (e) {
    if (e.target.name !== "cat") return;
    sel = Array.prototype.map.call(app.querySelectorAll('#prefs input[name="cat"]:checked'), function (i) { return i.value; });
    updateBar();
  });

  // 言語メニューの外を押したら閉じる
  document.addEventListener("click", function (e) {
    var menu = app.querySelector(".langs[open]");
    if (menu && !menu.contains(e.target)) menu.removeAttribute("open");
  });

  app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-go],[data-action],[data-lang],[data-slide]");
    if (!el) return;
    if (el.dataset.slide) {
      var v = el.dataset.slide;
      if (v === "toggle") {
        slidePlaying = !slidePlaying;
        el.setAttribute("aria-label", slidePlaying ? t("slidePause") : t("slidePlay"));
        el.firstChild.className = slidePlaying ? "icon-pause" : "icon-play";
        if (slidePlaying) startSlides(); else stopSlides();
        return;
      }
      goSlide(v === "prev" ? slideIndex - 1 : v === "next" ? slideIndex + 1 : +v);
      startSlides();
    } else if (el.dataset.lang) {
      lang = el.dataset.lang; state.lang = lang; save();
      var y = window.scrollY;
      show(view);
      window.scrollTo(0, y);
    } else if (el.dataset.go) {
      e.preventDefault();
      show(el.dataset.go, el.dataset.anchor);
    } else if (el.dataset.action === "change") {
      sel = (state.prefs || []).slice();
      show("home", "styles");
    }
  });

  app.addEventListener("submit", function (e) {
    if (e.target.id !== "prefs") return;
    e.preventDefault();
    if (!sel.length) return;
    state.prefs = sel.slice();
    save();
    show("list");
  });

  /* ---- はじめの画面：いつも何も選んでいない状態でトップを出す ---- */
  if (location.hash === "#about") show("about");
  else show("home");
})();
