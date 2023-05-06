# 我的餐廳清單

## 環境建置與需求
- node.js
- express @ 4.16.4
- express-handlebars @ 3.0.0
## 安裝步驟
- 1.開啟終端機 cd 存放目錄
- 2.終端機輸入 npm init
- 3.終端機輸入 npm i express@4.16.4
- 4.終端機輸入 npm i express-handlebars@3.0.0
- 5.終端機輸入 npm i body-parser
- 6.終端機輸入 npm i mongoose@5.9.7
## 功能描述
此專案提供使用者瀏覽以及搜尋餐廳，並顯示餐廳類別﹑評分﹑地址…資訊。

2023/05/04 - 更新項目
- 新增"detail"按鈕取代原始點選圖片或是文字連結到詳細資訊業面
- 新增"edit"按鈕，提供使用者編輯餐廳資訊
- 新增"Delete" 按鈕，提供使用者刪除餐廳
- Navbar上新增"新增餐廳"按鈕，提供使用者新增一間餐廳

2023/05/06 - 更新項目
- 搬移app.js中的所有路由到routes目錄，以便集中管理所有路由
- 改寫Method方式，讓其符合RESTful風格
- 增加Sort下拉式選單，並且讓主頁/查詢頁面都可互相套用所選