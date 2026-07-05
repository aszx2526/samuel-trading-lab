/* ============================================================
   文章 / Threads 整理資料 — data/posts.js
   新增文章：在陣列裡加一個物件。
     id        唯一代號
     title     標題
     summary   摘要（1–2 句）
     date      發佈日 YYYY-MM-DD
     category  分類文字
     threadUrl 對應 Threads 貼文連結（沒有就填 null）
     readUrl   站內完整內容連結（沒有就填 null）
   下面為範例內容，請直接替換成你自己的文章。
   ============================================================ */

const posts = [
  {
    id: "stop-loss-is-protection",
    title: "停損不是認輸，是買下一次出手的權利",
    summary: "把「小停損很不甘心」的情緒，換成「我在保護帳戶與下一個機會」的視角。附一條可以今天就用的規則。",
    date: "2026-07-03",
    category: "交易紀律",
    threadUrl: null,
    readUrl: null
  },
  {
    id: "one-visible-win",
    title: "每天只贏一次就好：可見交付的力量",
    summary: "不是排滿行程，而是每天完成一個拿得出來的成果。這是我把交易與工作都拉回軌道的最小系統。",
    date: "2026-06-28",
    category: "成長系統",
    threadUrl: null,
    readUrl: null
  },
  {
    id: "review-not-blame",
    title: "盤後復盤三分鐘：只評價規則，不審判自己",
    summary: "復盤不是開自責大會。用四個問句，把今天的交易變成明天可以保留或刪除的具體動作。",
    date: "2026-06-24",
    category: "交易復盤",
    threadUrl: null,
    readUrl: null
  }
];

window.STL = window.STL || {};
window.STL.posts = posts;
