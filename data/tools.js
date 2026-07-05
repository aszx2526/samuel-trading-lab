/* ============================================================
   工具資料來源 — data/tools.js
   新增工具：只要在陣列裡加一個物件即可，首頁與 tools.html 會自動出現。
   欄位說明：
     id          唯一代號（英數 + 連字號）
     title       工具名稱
     description 一句話簡介
     category    分類（需對應 tools.html 的分類清單）
     status      顯示文字，例如「免費使用」「開發中」「私人測試」
     statusType  "live" | "dev" | "private"（控制徽章顏色）
     url         連結（工具資料夾路徑，結尾請帶 /）
     image       封面圖路徑；沒有圖就填 null，會自動用漸層預設封面
     updatedAt   最後更新日 YYYY-MM-DD
     featured    是否顯示在首頁精選（true / false）
     order       排序（數字小的在前）
   ============================================================ */

const tools = [
  {
    id: "ideal-trader",
    title: "成為理想交易員",
    description: "開盤前風控、每日紀律檢查與盤後復盤的身份養成系統。",
    category: "交易紀律",
    status: "免費使用",
    statusType: "live",
    url: "tools/ideal-trader/",
    image: null,
    updatedAt: "2026-07-05",
    featured: true,
    order: 1
  },
  {
    id: "daily-win",
    title: "24H 穩定閉環",
    description: "以一個可見交付，建立每日「啟動 → 執行 → 復盤」的穩定節奏。",
    category: "成長系統",
    status: "免費使用",
    statusType: "live",
    url: "tools/daily-win/",
    image: null,
    updatedAt: "2026-07-05",
    featured: true,
    order: 2
  }
  // 之後新增工具就在這裡加物件，例如：
  // {
  //   id: "trade-review",
  //   title: "交易復盤表",
  //   description: "把每一筆交易拆成可檢查的進場、風控與出場紀錄。",
  //   category: "交易復盤",
  //   status: "開發中",
  //   statusType: "dev",
  //   url: "tools/trade-review/",
  //   image: null,
  //   updatedAt: "2026-07-10",
  //   featured: false,
  //   order: 3
  // }
];

/* 供頁面腳本讀取（不影響上方「加一個物件」的使用方式） */
window.STL = window.STL || {};
window.STL.tools = tools;
