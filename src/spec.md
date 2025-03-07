 # Create the Markdown content for the portfolio site spec
portfolio_spec_md = """\
# 📌 Portfolio Site Spec (English & Japanese)

## 1. Overview
A **single-page, bilingual** minimalistic portfolio site for **Jumpei Hirono**, showcasing:
- **Name & title**
- **Language toggle (English 🇺🇸 / 日本語 🇯🇵)**
- **Links to LinkedIn & GitHub**
- **Current projects** (*Awesome Climbing Search*)
- **Simple, clean, and professional design**

---

## 2. Tech Stack
- **Frontend:** Next.js (React-based)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Version Control:** GitHub
- **Internationalization:** `next-i18next` or a simple language toggle

---

## 3. Design
- **Layout:** Centered, single-column, minimalistic
- **Typography:** Modern, sans-serif
- **Color Scheme:** White/gray background with blue highlights
- **Spacing:** Well-padded sections
- **Responsive:** Mobile & desktop friendly
- **Language Toggle:** 🇺🇸 / 🇯🇵 (button or switch in the top-right corner)

---

## 4. Content Sections

### (English 🇺🇸)
#### 1. Header
- **Name:** *Jumpei Hirono*
- **Subtitle:** "Product Manager | AI & Climbing Enthusiast"

#### 2. Social Links (Icons & Links)
- **GitHub:** [github.com/jhirono](https://github.com/jhirono)
- **LinkedIn:** [linkedin.com/in/jhirono](https://www.linkedin.com/in/jhirono/)

#### 3. Projects
- **Awesome Climbing Search**
  - *Description:* "An AI-powered search tool for finding climbing routes."
  - *GitHub Repo:* `[Your GitHub Repo URL]`
  - *Live Demo (if available):* `[Live Demo URL]`

#### 4. Footer
- "© 2025 Jumpei Hirono"

---

### (日本語 🇯🇵)
#### 1. ヘッダー
- **名前:** *Jumpei Hirono*
- **サブタイトル:** "プロダクトマネージャー | AIとクライミング愛好家"

#### 2. ソーシャルリンク (アイコン & リンク)
- **GitHub:** [github.com/jhirono](https://github.com/jhirono)
- **LinkedIn:** [linkedin.com/in/jhirono](https://www.linkedin.com/in/jhirono/)

#### 3. プロジェクト
- **Awesome Climbing Search**
  - *説明:* "クライミングルートを検索するためのAIツール"
  - *GitHub リポジトリ:* `[Your GitHub Repo URL]`
  - *デモサイト (あれば):* `[Live Demo URL]`

#### 4. フッター
- "© 2025 Jumpei Hirono"

---

## 5. Deployment
- **Push the code to GitHub** (`github.com/jhirono/portfolio`)
- **Deploy on Vercel** (automatic via GitHub integration)
"""

# Save the Markdown content to a file
file_path = "/mnt/data/portfolio_spec.md"
with open(file_path, "w") as file:
    file.write(portfolio_spec_md)

# Provide the download link
file_path