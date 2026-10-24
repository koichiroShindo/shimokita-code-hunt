(function () {
  var C = window.CONFIG, STORES = window.STORES, TEXT = window.TEXT, LANGS = window.LANGS;
  var KEY = "code-hunt";
  var app = document.getElementById("app");

  /* ---- 保存（端末のブラウザに記録する） ---- */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  var state = load();
  state.found = state.found || {};
  state.done = state.done || [];

  /* ---- 言語 ---- */
  function pickLang() {
    if (state.lang && TEXT[state.lang]) return state.lang;
    var code = (navigator.language || "en").toLowerCase().slice(0, 2);
    return TEXT[code] ? code : "en";
  }
  var lang = pickLang();
  function t(key, vars) {
    var s = TEXT[lang][key];
    if (s === undefined) s = TEXT.en[key];
    if (typeof s === "string" && vars) {
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
  function store(id) {
    for (var i = 0; i < STORES.length; i++) if (STORES[i].id === id) return STORES[i];
    return null;
  }
  function routeStores() {
    return (state.route || []).map(store).filter(Boolean);
  }
  function foundCount() {
    return routeStores().filter(function (s) { return state.found[s.id]; }).length;
  }

  // 選んだ種類を順番に1軒ずつ割り当てて3軒選ぶ（2種類選べば両方が入る）。前の回で見つけたお店は後回しにする
  function recommend(prefs) {
    function shuffle(a) {
      a = a.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
      return a;
    }
    var pool = shuffle(STORES).map(function (s) {
      var score = s.categories.filter(function (c) { return prefs.indexOf(c) >= 0; }).length;
      if (state.done.indexOf(s.id) >= 0) score -= 10;
      return { s: s, score: score };
    });
    pool.sort(function (a, b) { return b.score - a.score; });
    var picked = [], order = shuffle(prefs);
    for (var round = 0; picked.length < 3 && round < 3; round++) {
      order.forEach(function (c) {
        if (picked.length >= 3) return;
        for (var i = 0; i < pool.length; i++) {
          var x = pool[i];
          if (picked.indexOf(x.s) < 0 && x.s.categories.indexOf(c) >= 0 && state.done.indexOf(x.s.id) < 0) { picked.push(x.s); return; }
        }
      });
    }
    pool.forEach(function (x) {
      if (picked.length < 3 && picked.indexOf(x.s) < 0) picked.push(x.s);
    });
    return picked.map(function (s) { return s.id; });
  }

  /* ---- 距離（m） ---- */
  function distance(lat1, lng1, lat2, lng2) {
    var R = 6371000, rad = Math.PI / 180;
    var dLat = (lat2 - lat1) * rad, dLng = (lng2 - lng1) * rad;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  /* ---- 画面 ---- */
  function header() {
    return '<header class="top"><a class="brand" href="./">' + esc(C.siteName) + "</a>" +
      '<nav class="langs" aria-label="Language">' + LANGS.map(function (l) {
        return '<button type="button" lang="' + l.code + '" data-lang="' + l.code + '"' +
          (l.code === lang ? ' aria-current="true"' : "") + ">" + l.label + "</button>";
      }).join("") + "</nav></header>";
  }

  function viewHome() {
    var resume = (state.route && state.route.length)
      ? '<button type="button" class="btn" data-go="route">' + t("resume") + "</button>"
      : "";
    return '<section class="hero">' +
      '<div class="photos">' +
      '<img src="images/street/street-1.jpg" alt="' + t("streetAlt") + '" width="508" height="380">' +
      '<img src="images/street/street-2.jpg" alt="' + t("streetAlt") + '" width="418" height="314">' +
      "</div>" +
      "<h1>" + t("tagline") + "</h1>" +
      '<p class="lead">' + t("lead") + "</p>" +
      '<div class="actions">' + resume +
      '<button type="button" class="btn' + (resume ? " btn-sub" : "") + '" data-go="prefs">' + t("start") + "</button></div>" +
      "</section>" +
      '<section class="steps"><h2>' + t("stepsTitle") + "</h2><ol>" +
      t("steps").map(function (s) { return "<li>" + s + "</li>"; }).join("") +
      "</ol></section>" + mapSection();
  }

  // 下北沢駅のまわりの地図（OpenStreetMap）。お店の位置が入ったら、お店ごとのピンに変えられる
  var STATION = { lat: 35.6615, lng: 139.6683 };
  function mapSection() {
    var d = 0.006;
    var bbox = [STATION.lng - d * 1.2, STATION.lat - d, STATION.lng + d * 1.2, STATION.lat + d].join(",");
    var src = "https://www.openstreetmap.org/export/embed.html?bbox=" + bbox +
      "&layer=mapnik&marker=" + STATION.lat + "," + STATION.lng;
    return '<section class="map"><h2>' + t("mapTitle") + "</h2>" +
      '<p class="sub">' + t("mapLead") + "</p>" +
      '<iframe title="' + t("mapTitle") + '" src="' + src + '" loading="lazy"></iframe>' +
      '<p class="map-credit">© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors</p>' +
      '<a class="link" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent("Shimokitazawa Station") +
      '" target="_blank" rel="noopener">' + t("mapOpen") + "</a></section>";
  }

  // 駅から3軒を順に回る、歩きの道順（Googleマップ）
  function routeLink(list) {
    var place = function (s) { return s.lat != null ? s.lat + "," + s.lng : s.name + " " + s.address; };
    var url = "https://www.google.com/maps/dir/?api=1&travelmode=walking" +
      "&origin=" + encodeURIComponent("Shimokitazawa Station") +
      "&destination=" + encodeURIComponent(place(list[list.length - 1])) +
      (list.length > 1 ? "&waypoints=" + encodeURIComponent(list.slice(0, -1).map(place).join("|")) : "");
    return '<a class="btn btn-sub" href="' + url + '" target="_blank" rel="noopener">' + t("routeMap") + "</a>";
  }

  function viewPrefs(error) {
    var prefs = state.prefs || [];
    return '<section class="block"><h1 class="h-page">' + t("prefsTitle") + "</h1>" +
      '<p class="sub">' + t("prefsLead") + "</p>" +
      '<form id="prefs"><fieldset class="chips"><legend class="visually-hidden">' + t("prefsTitle") + "</legend>" +
      Object.keys(TEXT.en.cat).map(function (c) {
        return '<label class="chip"><input type="checkbox" name="cat" value="' + c + '"' +
          (prefs.indexOf(c) >= 0 ? " checked" : "") + "><span>" + t("cat")[c] + "</span></label>";
      }).join("") +
      "</fieldset>" +
      (error ? '<p class="error" role="alert">' + t("prefsNone") + "</p>" : "") +
      '<button type="submit" class="btn">' + t("prefsSubmit") + "</button></form></section>";
  }

  function storeItem(s, i) {
    var done = !!state.found[s.id];
    var desc = (s.desc && (s.desc[lang] || s.desc.en)) || "";
    var map = "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(s.lat != null ? s.lat + "," + s.lng : s.name + " " + s.address);
    return '<li class="shop' + (done ? " is-found" : "") + '">' +
      (s.photo ? '<figure class="shop-photo"><img src="images/shops/' + esc(s.photo) + '" alt="' + esc(s.name) + '" loading="lazy">' +
        (s.credit ? "<figcaption>Photo: " + esc(s.credit) + "</figcaption>" : "") + "</figure>" : "") +
      '<div class="shop-head"><span class="shop-no">' + (i + 1) + "</span>" +
      "<h3>" + esc(s.name) + "</h3>" +
      '<span class="status">' + (done ? t("found") : t("notYet")) + "</span></div>" +
      '<p class="cats">' + s.categories.map(function (c) { return t("cat")[c]; }).join(" / ") + "</p>" +
      (desc ? "<p>" + esc(desc) + "</p>" : "") +
      '<p class="addr" lang="ja">' + esc(s.address) + "</p>" +
      '<a class="link" href="' + map + '" target="_blank" rel="noopener">' + t("map") + "</a></li>";
  }

  function viewRoute() {
    var list = routeStores();
    if (!list.length) return viewPrefs();
    var n = foundCount();
    return '<section class="block"><h1 class="h-page">' + t("routeTitle") + "</h1>" +
      '<p class="progress"><span class="meter"><span style="width:' + Math.round(n / 3 * 100) + '%"></span></span>' +
      t("progress", { n: n }) + "</p>" +
      (n >= 3
        ? '<p class="done">' + t("allDone") + '</p><button type="button" class="btn" data-action="again">' + t("again") + "</button>"
        : '<p class="sub">' + t("howto") + "</p>") +
      routeLink(list) +
      '<ol class="shops">' + list.map(storeItem).join("") + "</ol>" +
      (n >= 3 ? "" : '<button type="button" class="btn btn-sub" data-action="change">' + t("change") + "</button>") +
      "</section>";
  }

  function viewMessage(text, opts) {
    opts = opts || {};
    return '<section class="block message' + (opts.ok ? " is-ok" : "") + '" role="status">' +
      '<p class="message-text">' + text + "</p>" +
      (opts.sub ? '<p class="sub">' + opts.sub + "</p>" : "") +
      '<div class="actions">' + (opts.buttons || "") + "</div></section>";
  }

  var view = "home", pending = null, lastMessage = null;
  function render(body) {
    document.documentElement.lang = lang;
    document.title = C.siteName;
    app.innerHTML = header() + body;
  }
  function show(name) {
    view = name;
    if (name === "prefs") render(viewPrefs());
    else if (name === "route") render(viewRoute());
    else render(viewHome());
    window.scrollTo(0, 0);
  }
  // メッセージ画面は、言語を変えたときに作り直せるよう関数で持っておく
  function message(fn) {
    view = "message"; lastMessage = fn;
    render(fn());
  }

  /* ---- お店のQRを読んだとき ---- */
  function backBtn(sub) {
    return '<button type="button" class="btn' + (sub ? " btn-sub" : "") + '" data-go="route">' + t("back") + "</button>";
  }

  function handleStamp(id, key) {
    var s = store(id);
    if (!s || s.key !== key) {
      return message(function () { return viewMessage(t("invalid"), { buttons: '<a class="btn" href="./">' + esc(C.siteName) + "</a>" }); });
    }
    if (!state.route || !state.route.length) {
      return message(function () { return viewMessage(t("noRoute"), { buttons: '<button type="button" class="btn" data-go="prefs">' + t("start") + "</button>" }); });
    }
    if (state.route.indexOf(s.id) < 0) {
      return message(function () { return viewMessage(t("notInRoute", { name: esc(s.name) }), { buttons: backBtn() }); });
    }
    if (state.found[s.id]) return stamped(s);
    pending = s;
    checkLocation();
  }

  function stamped(s) {
    pending = null;
    state.found[s.id] = true;
    save();
    message(function () {
      var left = 3 - foundCount();
      return viewMessage(t("stamped", { name: esc(s.name) }), {
        ok: true,
        sub: left > 0 ? t("remaining", { n: left }) : t("allDone"),
        buttons: backBtn()
      });
    });
  }

  function checkLocation() {
    var s = pending;
    if (!C.requireLocation || s.lat == null) return stamped(s);
    var retry = function () {
      return '<button type="button" class="btn" data-action="retry">' + t("retry") + "</button>" + backBtn(true);
    };
    if (!navigator.geolocation) return message(function () { return viewMessage(t("unavailable"), { buttons: retry() }); });
    message(function () { return viewMessage(t("checking")); });
    navigator.geolocation.getCurrentPosition(function (pos) {
      var d = distance(pos.coords.latitude, pos.coords.longitude, s.lat, s.lng);
      var allowance = C.radiusMeters + Math.min(pos.coords.accuracy || 0, 50);
      if (d <= allowance) stamped(s);
      else message(function () { return viewMessage(t("tooFar", { d: Math.round(d), name: esc(s.name) }), { buttons: retry() }); });
    }, function (err) {
      message(function () { return viewMessage(err.code === 1 ? t("denied") : t("unavailable"), { buttons: retry() }); });
    }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 });
  }

  /* ---- 操作 ---- */
  app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-go],[data-action],[data-lang]");
    if (!el) return;
    if (el.dataset.lang) {
      lang = el.dataset.lang; state.lang = lang; save();
      if (view === "message") render(lastMessage());
      else if (view === "prefs") {
        // 選びかけのチェックを残したまま言語だけ切り替える
        var checked = Array.prototype.map.call(app.querySelectorAll("#prefs input:checked"), function (i) { return i.value; });
        render(viewPrefs());
        checked.forEach(function (v) { var i = app.querySelector('#prefs input[value="' + v + '"]'); if (i) i.checked = true; });
      }
      else show(view);
    } else if (el.dataset.go) {
      show(el.dataset.go);
    } else if (el.dataset.action === "change") {
      if (foundCount() && !confirm(t("confirmChange"))) return;
      state.found = {}; save();
      show("prefs");
    } else if (el.dataset.action === "again") {
      routeStores().forEach(function (s) { if (state.done.indexOf(s.id) < 0) state.done.push(s.id); });
      state.found = {}; save();
      show("prefs");
    } else if (el.dataset.action === "retry") {
      checkLocation();
    }
  });

  app.addEventListener("submit", function (e) {
    if (e.target.id !== "prefs") return;
    e.preventDefault();
    var prefs = Array.prototype.map.call(e.target.querySelectorAll("input:checked"), function (i) { return i.value; });
    if (!prefs.length) { render(viewPrefs(true)); return; }
    state.prefs = prefs;
    state.route = recommend(prefs);
    state.found = {};
    save();
    show("route");
  });

  /* ---- はじめの画面 ---- */
  var params = new URLSearchParams(location.search);
  if (params.get("s")) {
    var sid = params.get("s"), skey = params.get("k");
    history.replaceState(null, "", location.pathname);
    handleStamp(sid, skey);
  } else {
    show(state.route && state.route.length ? "route" : "home");
  }
})();
