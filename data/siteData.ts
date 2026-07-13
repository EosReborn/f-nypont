/**
 * ============================================================
 *  SITE DATA — Anna Fénypont Kozmetika
 * ============================================================
 * Ez az egyetlen fájl, amit szerkesztened kell, ha változik:
 *  - a vállalkozás neve, szlogenje, bemutatkozó szövege
 *  - a telefonszám, cím, közösségi média linkek
 *  - a nyitvatartás
 *  - a szolgáltatások és árak
 *  - a galéria képei
 *  - a vélemények
 *
 * A "TODO" / "helyőrző" jelzésű mezőket nyugodtan írd felül saját,
 * valós adatokkal — a felület automatikusan frissül.
 * ============================================================
 */

export const business = {
  name: "Anna Fénypont",
  nameAccent: "Kozmetika",
  shortName: "Anna Fénypont",
  slogan: "Szépség, ami belülről ragyog",
  tagline: "Műszempilla · Gyantázás · Kezelések · Smink",
  intro:
    "Bemutatkozó szöveg helye — itt mesélheted el pár mondatban, hogyan indult az utad a szépségápolás világában, mi fontos számodra a munkádban, és miért bízhatnak benned a vendégeid.",
  highlights: [
    {
      title: "Személyre szabott gondoskodás",
      description:
        "Minden alkalommal a Te bőröd és igényeid alapján választom ki a legmegfelelőbb kezelést.",
    },
    {
      title: "Minőségi anyagok",
      description:
        "Kizárólag ellenőrzött, bőrbarát alapanyagokkal és eszközökkel dolgozom.",
    },
    {
      title: "Barátságos, nyugodt környezet",
      description:
        "Egy hely, ahol tényleg elengedheted magad, amíg gondoskodom rólad.",
    },
  ],
  phoneDisplay: "06 20 592 9777",
  phoneHref: "tel:+36205929777",
  address: "9151 Abda, Dózsa utca 28/A",
  addressMapQuery: "9151 Abda, Dózsa utca 28/A",
  mapEmbedUrl:
    "https://www.google.com/maps?q=9151+Abda,+D%C3%B3zsa+utca+28/A&output=embed",
  facebookUrl: "https://facebook.com/",
  facebookName: "Virágh Anna",
  instagramUrl: "https://instagram.com/_anna_fenypont_kozmetika",
  instagramHandle: "_anna_fenypont_kozmetika",
  messengerUrl: "https://m.me/",
  openingHours: [
    { day: "Hétfő", hours: "Cím megadása" },
    { day: "Kedd", hours: "09:00 – 17:00" },
    { day: "Szerda", hours: "09:00 – 17:00" },
    { day: "Csütörtök", hours: "09:00 – 17:00" },
    { day: "Péntek", hours: "09:00 – 15:00" },
    { day: "Szombat", hours: "Előzetes egyeztetés alapján" },
    { day: "Vasárnap", hours: "Zárva" },
  ],
  openingNote:
    "Az időpontok előzetes egyeztetés alapján foglalhatók — hívj bátran, vagy írj üzenetet!",
} as const;

export type ServiceCategory = {
  id: string;
  icon: string; // lucide icon name, resolved in components/icon-map.tsx
  title: string;
  description: string;
  items: {
    name: string;
    description?: string;
    price: string;
  }[];
  /** Optional multi-column pricing table (pl. műszempilla építés) */
  table?: {
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  note?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "lash",
    icon: "Sparkles",
    title: "Műszempilla építés",
    description: "UV technológiával, tartós és könnyed hatás.",
    items: [],
    table: {
      columns: ["", "Újszett", "3 hetes töltés", "4 hetes töltés"],
      rows: [
        { label: "1D", values: ["12.000 Ft", "9.500 Ft", "10.500 Ft"] },
        { label: "2D", values: ["14.000 Ft", "11.500 Ft", "12.500 Ft"] },
        { label: "3D", values: ["16.000 Ft", "13.500 Ft", "14.500 Ft"] },
        { label: "4D", values: ["18.000 Ft", "15.500 Ft", "16.500 Ft"] },
      ],
    },
    note: "Leoldás: 4.500 Ft",
  },
  {
    id: "waxing",
    icon: "Flower2",
    title: "Gyantázás",
    description: "Selymes bőr, magabiztosan, hosszan tartó eredménnyel.",
    items: [
      { name: "Szemöldök", price: "1.500 Ft" },
      { name: "Bajusz", price: "1.300 Ft" },
      { name: "Áll", price: "1.300 Ft" },
      { name: "Hónalj", price: "1.800 Ft" },
      { name: "Kar könyékig", price: "2.000 Ft" },
      { name: "Kar végig", price: "3.000 Ft" },
      { name: "Bikini", price: "3.500 Ft" },
      { name: "Has", price: "3.500 Ft" },
      { name: "Láb térdig", price: "3.200 Ft" },
      { name: "Láb végig", price: "5.000 Ft" },
      { name: "Mellkas", price: "4.000 Ft" },
      { name: "Hát", price: "4.500 Ft" },
      { name: "Fazon teljes", price: "4.500 Ft" },
    ],
  },
  {
    id: "tint",
    icon: "Palette",
    title: "Festések",
    description: "Kiemeli, ami szép benned.",
    items: [
      { name: "Szempilla festés", price: "2.000 Ft" },
      { name: "Szemöldök festés", price: "2.000 Ft" },
    ],
  },
  {
    id: "treatments",
    icon: "Gem",
    title: "Kezeléseim",
    description: "Szépség, ami belülről ragyog.",
    items: [
      {
        name: "Tini kezelés",
        description: "Gyengéd ápolás a fiatal, ragyogó bőrért.",
        price: "9.500 Ft",
      },
      {
        name: "Nagykezelés",
        description: "Tisztítás, masszázs, ultrahang — komplett feltöltődés a bőrödnek.",
        price: "15.000 Ft",
      },
      {
        name: "Kiskezelés",
        description: "Masszázs, ultrahang — gyors, hatékony ápolás a ragyogó bőrért.",
        price: "10.000 Ft",
      },
    ],
  },
  {
    id: "massage",
    icon: "HandHeart",
    title: "Masszázs",
    description: "Az érintés, ami feltölt.",
    items: [
      { name: "Arcmasszázs", description: "30 perc", price: "4.500 Ft" },
      {
        name: "Arc és dekoltázsmasszázs",
        description: "30 perc",
        price: "6.000 Ft",
      },
    ],
  },
  {
    id: "makeup",
    icon: "Brush",
    title: "Smink",
    description: "Ragyogj minden alkalommal.",
    items: [
      { name: "Nappali smink", price: "6.500 Ft" },
      { name: "Alkalmi smink", price: "9.500 Ft" },
    ],
  },
];

/** Kiemelt szolgáltatás-kártyák a főoldal "Szolgáltatások" szekciójához */
export const featuredServices = [
  {
    id: "lash",
    icon: "Sparkles",
    title: "Műszempilla építés",
    description: "1D–4D technikák UV alapozással, természetes vagy dús hatásért.",
  },
  {
    id: "waxing",
    icon: "Flower2",
    title: "Gyantázás",
    description: "Selymes, sima bőr — arctól lábujjhegyig, kíméletes technikával.",
  },
  {
    id: "treatments",
    icon: "Gem",
    title: "Arckezelések",
    description: "Tisztító és feltöltő kezelések minden bőrtípusra szabva.",
  },
  {
    id: "makeup",
    icon: "Brush",
    title: "Smink",
    description: "Nappali és alkalmi sminkek, amik kiemelik a természetes szépséged.",
  },
];

export const gallery = [
  { src: "/images/gallery-1.svg", alt: "Műszempilla építés eredménye – Anna Fénypont Kozmetika" },
  { src: "/images/gallery-2.svg", alt: "Kezelés közben – Anna Fénypont Kozmetika" },
  { src: "/images/gallery-3.svg", alt: "Elkészült szemöldökfestés – Anna Fénypont Kozmetika" },
  { src: "/images/gallery-4.svg", alt: "Alkalmi smink – Anna Fénypont Kozmetika" },
  { src: "/images/gallery-5.svg", alt: "Szalon részlet – Anna Fénypont Kozmetika" },
  { src: "/images/gallery-6.svg", alt: "Arckezelés eredménye – Anna Fénypont Kozmetika" },
];

export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
  rating: number;
  isPlaceholder?: boolean;
};

/**
 * Nem álltak rendelkezésre valódi, nyilvánosan elérhető vélemények —
 * az alábbiak jól látható helyőrzők. Cseréld le őket a Facebook / Instagram
 * oldaladon kapott valódi visszajelzésekre.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Vendég véleménye helye",
    quote:
      "Ide kerül majd egy valódi vendégvélemény — cseréld le a Facebook vagy Instagram oldaladon kapott visszajelzésekre.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Vendég véleménye helye",
    quote:
      "Ide kerül majd egy valódi vendégvélemény — cseréld le a Facebook vagy Instagram oldaladon kapott visszajelzésekre.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Vendég véleménye helye",
    quote:
      "Ide kerül majd egy valódi vendégvélemény — cseréld le a Facebook vagy Instagram oldaladon kapott visszajelzésekre.",
    rating: 5,
    isPlaceholder: true,
  },
];

export const nav = [
  { href: "#bemutatkozas", label: "Bemutatkozás" },
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#arlista", label: "Árlista" },
  { href: "#galeria", label: "Galéria" },
  { href: "#velemenyek", label: "Vélemények" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export const seo = {
  title: "Anna Fénypont Kozmetika | Szépségápolás Abdán",
  description:
    "Műszempilla építés, gyantázás, arckezelések és smink Abdán. Foglalj időpontot személyre szabott, prémium szépségápolásra az Anna Fénypont Kozmetikánál.",
  ogImage: "/images/og-image.png",
  siteUrl: "https://anna-fenypont-kozmetika.vercel.app",
};
