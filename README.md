# Gaibandha Unlimited — Free Website Starter

এই প্যাকেজে আছে:
- `index.html` — কাস্টম ব্র্যান্ডিংসহ মোবাইল-ফ্রেন্ডলি ওয়েবসাইট
- `style.css` — ডিজাইন ও responsive layout
- `script.js` — ফর্ম ভ্যালিডেশন ও API সংযোগের জায়গা
- `Code.gs` — ঐচ্ছিক Google Apps Script ব্যাকএন্ড
- `DEPLOY-BN.md` — বিনা খরচে প্রকাশ ও সেটআপের নির্দেশনা

## গুরুত্বপূর্ণ
এটি একটি starter/demo; এখনও লাইভ ওয়েবসাইট নয়। `script.js`-এ `API_URL` ফাঁকা থাকলে ফর্ম বাস্তব তথ্য পাঠায় না। Google Apps Script backend সেটআপ ও পরীক্ষা না করে জনসাধারণের কাছে লিংক শেয়ার করবেন না। পেমেন্ট gateway যুক্ত নেই এবং ওয়েবসাইট নিজে টাকা গ্রহণ করে না।

## বিনা খরচে হোস্টিং
GitHub Pages-এ static files বিনা খরচে প্রকাশ করা যায়। ডোমেইন হবে `https://YOUR-USERNAME.github.io/REPOSITORY/` ধরনের। নিজের `.com` ডোমেইন বাধ্যতামূলক নয়।

## বাস্তব রেজিস্ট্রেশন চালুর আগে
1. একজন বিশ্বস্ত প্রাপ্তবয়স্ক/আয়োজকের সহায়তায় Google Sheet ও Apps Script সেটআপ করুন।
2. Sheet-টি Private রাখুন; শুধু নির্দিষ্ট আয়োজকদের Editor access দিন।
3. Apps Script Web App URL নিয়ে `script.js`-এর `API_URL`-এ বসান।
4. টেস্ট আবেদন, ভুল ফোন নম্বর, স্ট্যাটাস lookup এবং মোবাইল ভিউ পরীক্ষা করুন।
5. পাবলিক লঞ্চের আগে spam protection/CAPTCHA বা অন্য abuse protection বিবেচনা করুন।
6. ফি, ফেরত নীতি, অডিশনের তারিখ, যোগাযোগের নম্বর ও পুরস্কারের শর্ত নিশ্চিত করে প্রকাশ করুন।
7. ১৮ বছরের কম বয়সী অংশগ্রহণকারীদের তথ্য নেওয়ার আগে অভিভাবকের সম্মতি এবং তথ্য সংরক্ষণের নিয়ম ঠিক করুন।

## রেজিস্ট্রেশন ফি ও পেমেন্ট
বর্তমান ফি এই ডেমোতে নির্দিষ্ট করা হয়নি। ফি ঘোষণা করার আগে আয়োজকরা খরচ, পুরস্কার, ফেরত নীতি ও পেমেন্ট যাচাইয়ের পদ্ধতি ঠিক করবেন। কোনো অবস্থাতেই বিকাশ/নগদ PIN, OTP বা পাসওয়ার্ড চাইবেন না। প্রথম পর্যায়ে অনুমোদিত অফিসিয়াল নম্বরে পেমেন্ট এবং রেফারেন্স ম্যানুয়ালি যাচাই করা যেতে পারে; এটি স্বয়ংক্রিয় payment gateway নয়।

## Google Apps Script setup (সংক্ষেপ)
1. একটি Google Sheet তৈরি করুন। URL-এ `/d/` এবং `/edit`-এর মাঝের অংশটি Sheet ID।
2. Extensions → Apps Script-এ `Code.gs` ফাইলের কোড বসান।
3. Project Settings → Script properties-এ `SHEET_ID` নামে property তৈরি করে Sheet ID দিন।
4. Deploy → New deployment → Web app নির্বাচন করুন। Execute as: Me। Access: Anyone (শুধু বুঝে-শুনে এবং প্রাপ্তবয়স্ক আয়োজকের তত্ত্বাবধানে)।
5. Deploy হওয়া `/exec` URL-টি `script.js`-এ `API_URL` হিসেবে বসান।
6. নিজের ও আয়োজকদের পরীক্ষামূলক আবেদন দিয়ে যাচাই করুন। সমস্যা থাকলে লঞ্চ করবেন না।

নোট: Apps Script public endpoint-এ পূর্ণাঙ্গ rate limiting বা CAPTCHA নেই। বড় পরিসরে ব্যবহার, অর্থ লেনদেন বা সংবেদনশীল তথ্যের জন্য আরও শক্তিশালী backend/security দরকার।
