# Anna Fénypont Kozmetika — weboldal

Modern, reszponzív, magyar nyelvű bemutatkozó weboldal Next.js + TypeScript + Tailwind CSS alapon.

## Indítás

```bash
npm install
npm run dev
```

Ezután nyisd meg: http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Vercelre telepítés

1. Töltsd fel ezt a mappát egy GitHub repóba.
2. Menj a vercel.com oldalra → **Add New Project** → válaszd ki a repót.
3. A build beállítások automatikusan felismerik a Next.js projektet — nincs szükség
   semmilyen extra környezeti változóra vagy adatbázisra.
4. Kattints a **Deploy** gombra.

## Mit hol szerkessz?

| Mit szeretnél módosítani? | Melyik fájlban? |
| --- | --- |
| Vállalkozás neve, szlogen, bemutatkozó szöveg | `data/siteData.ts` → `business` objektum |
| Telefonszám, cím, nyitvatartás | `data/siteData.ts` → `business` objektum |
| Facebook / Instagram / Messenger linkek | `data/siteData.ts` → `business.facebookUrl`, `instagramUrl`, `messengerUrl` |
| Szolgáltatások és árak | `data/siteData.ts` → `serviceCategories` és `featuredServices` |
| Galéria képek | `data/siteData.ts` → `gallery` tömb + a képfájlok a `public/images` mappában |
| Vélemények | `data/siteData.ts` → `testimonials` tömb (jelenleg helyőrzők, cseréld valódi véleményekre) |
| Navigációs menüpontok | `data/siteData.ts` → `nav` tömb |
| SEO cím / leírás / OG kép | `data/siteData.ts` → `seo` objektum |

Minden más fájlt (komponensek, stílusok) nem szükséges módosítani — az oldal
automatikusan frissül a `data/siteData.ts`-ben megadott adatok alapján.

## Helyőrzők, amiket cserélni érdemes

- `public/images/hero-portrait.svg`, `about-portrait.svg`, `gallery-1..6.svg` — jelenleg
  elegáns, márkaszínekhez illő helyőrző grafikák, mert a Facebook-profilról nem sikerült
  automatikusan, jogtiszta módon képeket letölteni. Cseréld le valódi fotókra (ugyanazokkal
  a fájlnevekkel, vagy módosítsd az elérési utakat a `data/siteData.ts`-ben).
- Nyitvatartás, néhány óra placeholder — pontosítsd a `business.openingHours` tömbben.
- Vélemények — jelenleg egyértelműen jelölt helyőrző szöveg, cseréld valódi
  vendégvéleményekre.
- A kapcsolatfelvételi űrlap jelenleg csak frontend bemutató (nincs backend/e-mail küldés).
  Éles használathoz köss hozzá egy API route-ot vagy egy űrlapkezelő szolgáltatást
  (pl. Formspree, Resend, EmailJS).
