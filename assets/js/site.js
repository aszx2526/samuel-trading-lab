/* ============================================================
   共用腳本 — assets/js/site.js
   1. 導覽列目前頁高亮
   2. footer 年份
   3. 文章卡渲染（posts.js）
   4. 成長紀錄時間軸渲染（updates.js）
   社群連結請在下方 SOCIAL 直接改成你的網址。
   ============================================================ */
(function () {
  "use strict";

  // ← 改成你的實際連結（沒有的先留 "#"）
  var SOCIAL = {
    threads: "https://www.threads.com/@tsaitsungying1990",
    youtube: "https://www.youtube.com/@UncelSamuel1990"
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m];
    });
  }
  function byId(id) { return document.getElementById(id); }

  // ---- 導覽高亮 ----
  function markActiveNav() {
    var page = document.body.getAttribute("data-page");
    if (!page) return;
    [].forEach.call(document.querySelectorAll(".nav-links a[data-nav]"), function (a) {
      if (a.getAttribute("data-nav") === page) a.setAttribute("aria-current", "page");
    });
  }

  // ---- footer 年份 ----
  function setYear() {
    [].forEach.call(document.querySelectorAll("[data-year]"), function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  // ---- 社群連結填入 ----
  function fillSocial() {
    [].forEach.call(document.querySelectorAll("[data-social]"), function (el) {
      var key = el.getAttribute("data-social");
      if (SOCIAL[key]) el.setAttribute("href", SOCIAL[key]);
    });
  }

  // ---- 文章卡 ----
  function renderPosts(targetId, limit) {
    var el = byId(targetId);
    if (!el) return;
    var posts = ((window.STL && window.STL.posts) || []).slice().sort(function (a, b) {
      return (b.date || "").localeCompare(a.date || "");
    });
    if (limit) posts = posts.slice(0, limit);
    if (!posts.length) {
      el.innerHTML = '<p class="empty-note">還沒有文章。到 data/posts.js 新增第一篇。</p>';
      return;
    }
    el.innerHTML = posts.map(function (p) {
      var links = [];
      if (p.readUrl) links.push('<a href="' + esc(p.readUrl) + '">閱讀整理</a>');
      if (p.threadUrl) links.push('<a href="' + esc(p.threadUrl) + '" data-ext target="_blank" rel="noopener">Threads 原文</a>');
      if (!links.length) links.push('<span class="tool-date">內容整理中</span>');
      return (
        '<article class="card post-card">' +
        '<div class="post-meta"><span>' + esc(p.date) + "</span><span>·</span><span>" + esc(p.category) + "</span></div>" +
        "<h3>" + esc(p.title) + "</h3>" +
        "<p>" + esc(p.summary) + "</p>" +
        '<div class="post-links">' + links.join("") + "</div>" +
        "</article>"
      );
    }).join("");
  }

  // ---- 成長紀錄時間軸 ----
  function renderUpdates(targetId, limit) {
    var el = byId(targetId);
    if (!el) return;
    var ups = ((window.STL && window.STL.updates) || []).slice().sort(function (a, b) {
      return (b.date || "").localeCompare(a.date || "");
    });
    if (limit) ups = ups.slice(0, limit);
    if (!ups.length) {
      el.innerHTML = '<p class="empty-note">還沒有更新紀錄。到 data/updates.js 新增第一筆。</p>';
      return;
    }
    el.innerHTML =
      '<ul class="timeline">' +
      ups.map(function (u) {
        return (
          "<li>" +
          '<span class="tl-date">' + esc(u.date) + "</span>" +
          (u.tag ? '<span class="tl-tag">' + esc(u.tag) + "</span>" : "") +
          "<h3>" + esc(u.title) + "</h3>" +
          "<p>" + esc(u.body) + "</p>" +
          "</li>"
        );
      }).join("") +
      "</ul>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    markActiveNav();
    setYear();
    fillSocial();
  });

  window.STLSite = { renderPosts: renderPosts, renderUpdates: renderUpdates };
})();
