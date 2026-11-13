# Tilmoch — PWA (brauzerdan o'rnatiladigan ilova)

Bu papkadagi fayllar internetga joylansa, ilovani telefonga o'rnatish mumkin. Bir marta ochilgandan keyin internetsiz ishlaydi.

## 1. GitHub Pages'ga joylash (bepul, ~10 daqiqa)

1. **github.com** da akkaunt oching (bor bo'lsa, kiring).
2. **+** → **New repository** → nomi: `tilmoch` → **Public** → **Create repository**.
3. **uploading an existing file** havolasini bosing.
4. Zip arxivni oching va **tilmoch-pwa papkasining ichidagi hamma faylni** (`fonts` papkasi bilan birga) brauzerga sudrab tashlang → **Commit changes**.
5. Repozitoriyda **Settings** → chapdagi **Pages** → **Source: Deploy from a branch** → Branch: **main**, papka: **/ (root)** → **Save**.
6. 1–2 daqiqadan keyin sahifa tepasida manzil chiqadi:
   `https://SIZNING-LOGIN.github.io/tilmoch/`

## 2. Telefonga o'rnatish

**Android (Chrome):** manzilni oching → pastda chiqadigan **«Ilovani o'rnatish»** tugmasini bosing. Chiqmasa: o'ng yuqoridagi **⋮** → **«Ilovani o'rnatish»** yoki **«Bosh ekranga qo'shish»**.

**iPhone (Safari):** manzilni oching → pastdagi **«Ulashish»** tugmasi → **«Bosh ekranga»**.

Ilova bosh ekranda ikonka bilan paydo bo'ladi va to'liq ekranda ochiladi.

## 3. Offline ishlash

- Birinchi marta ochganingizda barcha fayllar telefon xotirasiga yuklanadi (~1 MB).
- Shundan keyin internet kerak emas: darslar, o'yinlar, imtihonlar, natijalar ishlayveradi.
- Talaffuz telefonning ovozli o'qish funksiyasidan foydalanadi. Internetsiz ishlashi uchun telefonda ingliz va rus ovozlari yuklangan bo'lishi kerak
  (Android: Sozlamalar → Tizim → Til → Matnni nutqqa aylantirish → Google → ovozlarni yuklash).

## Muhim

- Natijalar brauzer xotirasida saqlanadi. Chrome/Safari ma'lumotlarini tozalasangiz yoki ilovani o'chirsangiz, progress o'chadi.
- Kunlik eslatma (bildirishnoma) PWA'da ishlamaydi — bu faqat APK versiyada bor.

## Yangilash

Fayllarni o'zgartirsangiz, `sw.js` ichidagi `CACHE='tilmoch-v5.0.0'` qatoridagi versiyani oshiring (masalan `v5.0.1`) va GitHub'ga qayta yuklang. Telefonlar keyingi ochilishda yangi versiyani oladi.
