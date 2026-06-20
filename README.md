# 🎓 RMUTTO Student Council Website (เว็บไซต์สภานักศึกษา มทร.ตะวันออก)

แพลตฟอร์มเว็บไซต์อย่างเป็นทางการของสภานักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก (RMUTTO) สร้างขึ้นเพื่อเป็นศูนย์กลางในการกระจายข่าวสาร รวบรวมเอกสารแบบฟอร์มต่างๆ และรับฟังปัญหาของนักศึกษาผ่านระบบร้องเรียนแบบนิรนาม

## ✨ ฟีเจอร์หลัก (Key Features)

- **📰 ข่าวสารและกิจกรรม (Events):** ติดตามความเคลื่อนไหวและโครงการต่างๆ ของสภานักศึกษา
- **👥 ทำเนียบคณะกรรมการ (About Us):** ข้อมูลวิสัยทัศน์ พันธกิจ และรายชื่อคณะกรรมการสภานักศึกษา
- **📁 ระบบดาวน์โหลดเอกสาร (Document Center):** รวบรวมแบบฟอร์มคำร้อง, เอกสารชมรม และข้อบังคับต่างๆ จัดหมวดหมู่แบบ Sub-folder ค้นหาง่าย
- **🕵️ ระบบร้องเรียนนิรนาม (Anonymous Complaints):** - ระบบยืนยันตัวตนด้วยอีเมลมหาวิทยาลัย (`@rmutto.ac.th`)
  - เข้ารหัสข้อมูลผู้แจ้งเพื่อความปลอดภัยและปกปิดตัวตน (Anonymous)
  - รองรับการแนบไฟล์รูปภาพประกอบปัญหา
  - ซิงค์ข้อมูลเข้าฐานข้อมูลหลัก (Supabase) และสำรองข้อมูลลง Google Sheets แบบ Real-time

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend & Backend:** [SvelteKit](https://kit.svelte.dev/) (TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database, Auth & Storage:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Data Sync:** Google Apps Script & Google Sheets Webhooks
- **Deployment:** [Vercel](https://vercel.com/) (แนะนำ)

---

## 🚀 การติดตั้งและรันโปรเจกต์ (Getting Started)

### 1. โคลนโปรเจกต์และติดตั้ง Dependencies

เปิด Terminal แล้วรันคำสั่งต่อไปนี้:

```bash
git clone <your-repository-url>
cd studentrmutto
npm install
```
