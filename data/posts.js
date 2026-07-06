/* ============================================================
   文章 / 影片重點整理資料 — data/posts.js
   新增文章：把 HTML 放進 articles/，再在這裡加一個物件。
     id        唯一代號
     title     標題
     summary   摘要（1–2 句）
     date      發佈日 YYYY-MM-DD（清單依此由新到舊排序）
     category  分類文字（卡片標籤用）
     threadUrl 對應 Threads 貼文連結（沒有就填 null）
     readUrl   站內完整內容連結（指到 articles/ 裡的檔案）
   ============================================================ */

const posts = [
  {
    id: "ai-digital-product",
    title: "用 AI 做數位產品變現：從內容到第一筆銷售",
    summary: "把「賣解決方案而不是賣資訊」的影片重點,拆成選題、製作、導流的可執行流程,並套用到交易工具與內容變現。",
    date: "2026-07-06",
    category: "數位變現",
    threadUrl: null,
    readUrl: "articles/ai-digital-product.html"
  },
  {
    id: "2026-trader-vision-board",
    title: "2026 交易員年度作戰板:把願景轉成紀律",
    summary: "把「顯化板」改寫成交易者真正能執行的年度作戰板——身份、風控、復盤與生活支持系統,附作戰板範例與開盤前 60 秒檢查。",
    date: "2026-07-05",
    category: "年度計畫",
    threadUrl: null,
    readUrl: "articles/2026-trader-vision-board.html"
  },
  {
    id: "self-control-rebuild",
    title: "自制力重建:不是硬撐,而是改變系統",
    summary: "整理四種最常見的自制力陷阱與習慣化流程,對應到交易前 60 秒檢查,讓紀律靠系統而不是意志力。",
    date: "2026-07-04",
    category: "交易紀律",
    threadUrl: null,
    readUrl: "articles/self-control-rebuild.html"
  },
  {
    id: "manifestation-identity",
    title: "顯化與終點身份:先活成目標的那個人",
    summary: "整理影片論述,並清楚區分哪些能落地、哪些是信念比喻,最後給交易員版本的終點身份與每日行動練習。",
    date: "2026-07-03",
    category: "交易心態",
    threadUrl: null,
    readUrl: "articles/manifestation-identity.html"
  },
  {
    id: "fear-to-abundance",
    title: "從恐懼到豐盛:把猶豫換成可執行的行動",
    summary: "五個心態改寫成可驗證的小實驗與身份行為清單——鬆開限制、停止空想、允許失敗、先成為再擁有、回到當下。",
    date: "2026-07-02",
    category: "交易心態",
    threadUrl: null,
    readUrl: "articles/fear-to-abundance.html"
  }
];

window.STL = window.STL || {};
window.STL.posts = posts;
