# Samuel Trading Lab

交易員成長工具庫 — 一個純靜態網站，集中管理交易紀律工具、文章整理與成長紀錄。
不含登入、資料庫、金流或自動下單，工具資料只存在使用者自己的瀏覽器（localStorage）。

技術：HTML + CSS + Vanilla JavaScript　｜　部署：GitHub + Vercel

---

## 檔案結構

```
samuel-trading-lab/
├─ index.html          首頁（精選工具 + 最新內容 + 成長紀錄 + 社群）
├─ tools.html          工具總覽（分類篩選，資料驅動）
├─ articles.html       文章 / Threads 整理
├─ journey.html        成長紀錄時間軸
├─ about.html          關於 / 網站定位
├─ README.md           本檔
│
├─ assets/
│  ├─ css/site.css         共用樣式（深色系統 + RWD）
│  ├─ js/site.js           導覽高亮、文章卡、時間軸、社群連結
│  ├─ js/render-tools.js   工具卡渲染 + 分類篩選 + 漸層預設封面
│  ├─ images/covers/       工具封面圖（可留空）
│  ├─ images/social/       OG / 分享圖
│  └─ icons/
│
├─ data/
│  ├─ tools.js         工具資料（新增工具只改這裡）
│  ├─ posts.js         文章 / Threads 資料
│  └─ updates.js       成長紀錄資料
│
└─ tools/
   ├─ ideal-trader/index.html   成為理想交易員（已整合外框）
   └─ daily-win/index.html      24H 必勝閉環（已整合外框）
```

---

## 1. 本機預覽

因為頁面用 `<script src>` 載入 `data/*.js`，直接雙擊 `index.html`（`file://`）多數瀏覽器也能跑，
但建議用本機伺服器，行為和線上一致：

```bash
# 方法 A：Python（多數電腦內建）
cd samuel-trading-lab
python3 -m http.server 5173
# 打開 http://localhost:5173

# 方法 B：Node（有裝 npx）
cd samuel-trading-lab
npx serve .
```

檢查項目：首頁精選工具、`tools.html` 分類篩選、兩個工具能開能存、手機寬度（DevTools 調到 390px）無水平溢位。

---

## 2. 上傳到 GitHub

```bash
cd samuel-trading-lab
git init
git add .
git commit -m "init: Samuel Trading Lab V1"
git branch -M main
# 先到 GitHub 建一個空 repo（例如 samuel-trading-lab），再接：
git remote add origin https://github.com/<你的帳號>/samuel-trading-lab.git
git push -u origin main
```

---

## 3. 部署到 Vercel

1. 登入 <https://vercel.com>，點 **Add New → Project**。
2. 匯入剛剛的 GitHub repo。
3. Framework Preset 選 **Other**；Build Command 留空；Output Directory 留空（純靜態）。
4. 按 **Deploy**，完成後會拿到一個 `xxx.vercel.app` 網址。
5. 之後每次 `git push`，Vercel 會自動重新部署。
6. 要綁自訂網域：專案 → Settings → Domains 加入即可。

---

## 4. 新增一個工具（SOP）

1. 在 `tools/` 建資料夾，例如 `tools/trade-review/`，把可獨立運作的 HTML 放成 `index.html`。
2. 在 `data/tools.js` 陣列加一個物件：

   ```js
   {
     id: "trade-review",
     title: "交易復盤表",
     description: "把每一筆交易拆成可檢查的紀錄。",
     category: "交易復盤",      // 對應 tools.html 的分類
     status: "開發中",
     statusType: "dev",         // live / dev / private
     url: "tools/trade-review/",
     image: null,               // 有封面就填 "assets/images/covers/trade-review.jpg"
     updatedAt: "2026-07-10",
     featured: false,           // 要不要上首頁精選
     order: 3
   }
   ```

3. 首頁精選區與 `tools.html` 會自動出現這個工具，不用手寫卡片。
4. 建議在工具頁補上「返回工具庫 / 相關工具 / 免責聲明」（可參考已整合的兩個工具）。

> **封面圖：** `image` 填 `null` 時會用依 id 自動產生的漸層封面（不會有破圖）。
> 想用真圖，就把圖放到 `assets/images/covers/`，再把 `image` 改成該路徑。

---

## 5. 新增文章 / 成長紀錄

- 文章：在 `data/posts.js` 加物件（`title / summary / date / category / threadUrl / readUrl`）。
- 成長紀錄：在 `data/updates.js` 加物件（`date / tag / title / body`）。

---

## 6. 社群連結設定

打開 `assets/js/site.js` 最上面的 `SOCIAL`，把 `threads / youtube / live` 換成你的實際網址即可。

---

## 注意事項

- 本網站不含 API Key、帳密或任何私人資料，請勿把敏感資訊寫進 `data/*.js` 或工具頁。
- 成長紀錄請只寫「做了什麼、學到什麼、下一步」，不要放帳戶、密碼、API Key。
- 所有工具資料存在使用者本機瀏覽器；換裝置或清除資料不會同步。
- 內容與工具不構成投資建議、獲利保證或交易承諾。
