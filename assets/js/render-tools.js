/* ============================================================
   工具卡渲染 — assets/js/render-tools.js
   讀取 data/tools.js（window.STL.tools），渲染精選區與工具總覽。
   沒有封面圖時，用由 id 推導出的漸層預設封面（不會產生 404）。
   ============================================================ */
(function () {
  "use strict";

  var STATUS_CLASS = { live: "status-live", dev: "status-dev", private: "status-private" };

  // 由字串推導一組穩定的漸層（讓每個工具有固定但不同的預設封面）
  function hashHue(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
  }
  function gradientFor(id) {
    var h1 = hashHue(id || "tool");
    var h2 = (h1 + 42) % 360;
    return "linear-gradient(135deg,hsl(" + h1 + " 55% 32%),hsl(" + h2 + " 60% 22%))";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m];
    });
  }

  function pathPrefix() {
    // 首頁/總覽頁在根目錄，故不需前綴；tools.js 內的 url 已是相對根目錄的路徑。
    return "";
  }

  function coverMarkup(tool) {
    if (tool.image) {
      // 有圖才輸出 <img>；載入失敗時交由 onerror 換回漸層，避免破圖。
      return (
        '<div class="tool-cover" style="background:' + gradientFor(tool.id) + '">' +
        '<img src="' + esc(tool.image) + '" alt="' + esc(tool.title) + ' 封面" ' +
        'onerror="this.remove()"></div>'
      );
    }
    return (
      '<div class="tool-cover" style="background:' + gradientFor(tool.id) + '">' +
      '<span class="cover-label">' + esc(tool.title) + "</span></div>"
    );
  }

  function cardMarkup(tool) {
    var sClass = STATUS_CLASS[tool.statusType] || "status-live";
    return (
      '<a class="card tool-card" href="' + esc(pathPrefix() + tool.url) + '">' +
      coverMarkup(tool) +
      '<div class="tool-body">' +
      '<div class="tool-meta">' +
      '<span class="tool-cat">' + esc(tool.category) + "</span>" +
      '<span class="status-badge ' + sClass + '">' + esc(tool.status) + "</span>" +
      "</div>" +
      "<h3>" + esc(tool.title) + "</h3>" +
      "<p>" + esc(tool.description) + "</p>" +
      '<div class="tool-meta"><span class="tool-date">更新 ' + esc(tool.updatedAt) + "</span></div>" +
      "</div></a>"
    );
  }

  function sortTools(list) {
    return list.slice().sort(function (a, b) {
      return (a.order || 999) - (b.order || 999);
    });
  }

  function getTools() {
    return (window.STL && window.STL.tools) || [];
  }

  // ---- 首頁精選區 ----
  function renderFeatured(targetId, limit) {
    var el = document.getElementById(targetId);
    if (!el) return;
    var list = sortTools(getTools()).filter(function (t) { return t.featured; });
    if (limit) list = list.slice(0, limit);
    el.innerHTML = list.length
      ? list.map(cardMarkup).join("")
      : '<p class="empty-note">尚未設定精選工具。到 data/tools.js 把某個工具的 featured 設為 true。</p>';
  }

  // ---- 工具總覽（含分類篩選）----
  function renderCatalog(gridId, filterId) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    var all = sortTools(getTools());

    function draw(cat) {
      var list = cat === "全部" || !cat ? all : all.filter(function (t) { return t.category === cat; });
      grid.innerHTML = list.length
        ? list.map(cardMarkup).join("")
        : '<p class="empty-note">這個分類目前還沒有工具。</p>';
    }

    // 分類清單：固定六類 + 實際出現過的分類（避免遺漏）
    var base = ["交易紀律", "交易復盤", "盤面觀察", "成長系統", "開發工具", "交易筆記"];
    var present = all.map(function (t) { return t.category; });
    var cats = ["全部"].concat(base.filter(function (c) { return true; }));
    present.forEach(function (c) { if (cats.indexOf(c) === -1) cats.push(c); });

    var filter = document.getElementById(filterId);
    if (filter) {
      filter.innerHTML = cats
        .map(function (c, i) {
          return '<button class="filter-chip" role="button" aria-pressed="' + (i === 0) + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
        })
        .join("");
      filter.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-chip");
        if (!btn) return;
        [].forEach.call(filter.querySelectorAll(".filter-chip"), function (b) {
          b.setAttribute("aria-pressed", b === btn);
        });
        draw(btn.dataset.cat);
      });
    }
    draw("全部");
  }

  window.STLTools = { renderFeatured: renderFeatured, renderCatalog: renderCatalog };
})();
