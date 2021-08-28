# 📬 hy-noti

## 📃 About Project

```
한양대학교의 모든 정보를 한 눈에!
  👉🏻 포털과 각 학과 홈페이지에 흩어져 있는 공지 크롤링
  👉🏻 학우들과 유용한 정보를 공유할 수 있는 Info-Board

```

## 🗂 Project Structure

### 🖥 Front-End

- React.js를 이용한 Web Application

```bash
📦public
 ┣ 📂imgs
 ┃ ┣ 📜loupe.png
 ┃ ┗ 📜menu.png
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┣ 📜robots.txt
 ┃
📦src
 ┣ 📂api
 ┃ ┗ 📜api.js
 ┣ 📂common
 ┃ ┗ 📜colors.module.css
 ┣ 📂components
 ┃ ┣ 📂board
 ┃ ┃ ┣ 📜board.jsx
 ┃ ┃ ┗ 📜board.module.css
 ┃ ┣ 📂boardCategory
 ┃ ┃ ┣ 📜boardCategory.jsx
 ┃ ┃ ┗ 📜boardCategory.module.css
 ┃ ┣ 📂boardRow
 ┃ ┃ ┣ 📜boardRow.jsx
 ┃ ┃ ┗ 📜boardRow.module.css
 ┃ ┣ 📂menuBar
 ┃ ┃ ┣ 📜menuBar.jsx
 ┃ ┃ ┗ 📜menuBar.module.css
 ┃ ┣ 📂navbar
 ┃ ┃ ┣ 📜navbar.jsx
 ┃ ┃ ┗ 📜navbar.module.css
 ┃ ┗ 📂searchBar
 ┃ ┃ ┣ 📜searchBar.jsx
 ┃ ┃ ┗ 📜searchbar.module.css
 ┣ 📜App.jsx
 ┣ 📜App.module.css
 ┣ 📜index.css
 ┗ 📜index.js


```


### 🛠 Back-End

- Web Server
    - Python - Django
- Crawler
    - Python - Selenium, Scrapy
- DataBase
    - AWS
