import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroStrips from "@/assets/hero-strips.png.asset.json";
import themeClassic from "@/assets/classic-white.png.asset.json";
import themeBloom from "@/assets/romantic-bloom.png.asset.json";
import themeMinimal from "@/assets/modern-minimal.png.asset.json";
import themeRetro from "@/assets/retro-flash.png.asset.json";
import themeEditorial from "@/assets/editorial-clean.png.asset.json";
import themeCustom from "@/assets/custom-theme.png.asset.json";
import galleryMonitor from "@/assets/gallery-monitor.png.asset.json";
import boothTelephone from "@/assets/booth-telephone.png.asset.json";
import boothElevator from "@/assets/booth-elevator.png.asset.json";
import boothCowboy from "@/assets/booth-cowboy.png.asset.json";
import resWedding from "@/assets/result-wedding.png.asset.json";
import resApoteker from "@/assets/result-apoteker.png.asset.json";
import resActivation from "@/assets/result-activation.png.asset.json";
import resGathering from "@/assets/result-gathering.png.asset.json";
import resEngagement from "@/assets/result-engagement.png.asset.json";
import resDokter from "@/assets/result-dokter.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rekam Rasa — Photobooth Rental untuk Acara" },
      {
        name: "description",
        content:
          "Rekam Rasa menghadirkan photobooth rental untuk wedding, engagement, birthday, corporate event, dan brand activation dengan setup rapi dan hasil cepat.",
      },
      { property: "og:title", content: "Rekam Rasa — Photobooth Rental untuk Acara" },
      {
        property: "og:description",
        content:
          "Photobooth rental elegan untuk wedding, engagement, birthday, hingga corporate event. Setup rapi, hasil cepat, tampilan bisa disesuaikan.",
      },
    ],
  }),
  component: Index,
});

function Ph({ className = "", label }: { className?: string; label?: string }) {
  return (
    <div className={`ph ${className}`} role="img" aria-label={label ?? "Placeholder gambar"}>
      {label ? <span className="ph-label">{label}</span> : null}
    </div>
  );
}

/* Reveal-on-scroll wrapper */
function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

const nav = [
  { label: "Tentang", href: "#tentang" },
  { label: "Untuk Acara", href: "#acara" },
  { label: "Tema", href: "#tema" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

const reasons = [
  ["01", "Setup rapi di venue", "Tim datang lebih awal, booth tertata tanpa mengganggu alur acara."],
  [
    "02",
    "Operator standby selama acara",
    "Selalu ada yang menemani tamu dari sesi pertama sampai terakhir.",
  ],
  ["03", "Hasil cepat dibagikan", "Foto siap dibagikan hanya beberapa saat setelah sesi berakhir."],
  ["04", "Soft file atau print", "Sesuaikan dengan kebutuhan dan gaya acaramu."],
  ["05", "Tampilan menyesuaikan acara", "Frame, layar, dan properti mengikuti nuansa yang kamu bawa."],
  ["06", "Indoor maupun outdoor", "Konfigurasi booth fleksibel untuk berbagai jenis venue."],
];

const events = [
  ["Wedding", "Sesi hangat untuk tamu di hari yang panjang."],
  ["Engagement", "Momen kecil yang layak disimpan rapi."],
  ["Birthday", "Suasana ramai yang tetap terasa tertata."],
  ["Corporate Event", "Booth profesional dengan sentuhan brand."],
  ["Brand Activation", "Interaksi pengunjung yang mudah diingat."],
  ["Gathering", "Kumpul yang meninggalkan cetakan nyata."],
];

const themes: [string, string, string][] = [
  [
    "Classic White",
    "Latar bersih, cahaya lembut, hasil timeless untuk acara formal.",
    themeClassic.url,
  ],
  [
    "Romantic Bloom",
    "Nuansa lembut dengan detail floral untuk wedding dan engagement.",
    themeBloom.url,
  ],
  ["Modern Minimal", "Garis tegas dan bentuk geometris; rapi tanpa banyak ornamen.", themeMinimal.url],
  ["Retro Flash", "Rasa kamera analog dengan aksen retro dan grain tipis.", themeRetro.url],
  ["Editorial Clean", "Komposisi majalah, tone netral, cocok untuk brand.", themeEditorial.url],
  [
    "Custom Theme",
    "Frame dengan nama dan tanggal acaramu, dibuat mengikuti tema sendiri.",
    themeCustom.url,
  ],
];

const booths: [string, string, string][] = [
  [
    "Elevator Booth",
    "Panel metalik dan cahaya bersih — kesan modern, rapi, cocok untuk corporate dan brand activation.",
    boothElevator.url,
  ],
  [
    "Telephone Booth",
    "Kabin merah klasik yang langsung jadi pusat perhatian di area tamu.",
    boothTelephone.url,
  ],
  [
    "Koboy Booth",
    "Kayu hangat bernuansa western, ramai tapi tetap terasa tertata.",
    boothCowboy.url,
  ],
];

const results: [string, string][] = [
  [resWedding.url, "Photo strip hasil photobooth di acara wedding"],
  [resEngagement.url, "Photo strip hasil photobooth di acara engagement"],
  [resActivation.url, "Photo strip hasil photobooth di brand activation"],
  [resGathering.url, "Photo strip hasil photobooth di acara gathering"],
  [resDokter.url, "Photo strip hasil photobooth di acara sumpah dokter"],
  [resApoteker.url, "Photo strip hasil photobooth di acara sumpah apoteker"],
];

const packages = [
  {
    name: "Paket A",
    sub: "3 Jam — Soft File Only",
    price: "Rp2.500.000",
    items: [
      "Durasi layanan 3 jam",
      "Soft file seluruh hasil sesi",
      "Operator standby",
      "Setup dan bongkar booth",
      "Template standar",
      "Hasil siap dibagikan",
    ],
    cta: "Pilih Paket A",
    featured: false,
  },
  {
    name: "Paket B",
    sub: "3 Jam — Print Include",
    price: "Rp3.500.000",
    items: [
      "Durasi layanan 3 jam",
      "Soft file seluruh hasil sesi",
      "Print photo strip",
      "Operator standby",
      "Setup dan bongkar booth",
      "Template standar",
      "Print dibawa pulang tamu",
    ],
    cta: "Pilih Paket B",
    featured: true,
  },
  {
    name: "Paket C",
    sub: "Custom Event",
    price: "Hubungi Admin",
    items: [
      "Durasi fleksibel",
      "Soft file dan print disesuaikan",
      "Kebutuhan event lebih besar",
      "Penyesuaian tampilan acara",
      "Opsi branding atau desain custom",
      "Untuk wedding besar & corporate",
    ],
    cta: "Konsultasi Admin",
    featured: false,
  },
];

const addonGroups = [
  {
    group: "Durasi & Cetak",
    items: [
      ["Tambah waktu", "Rp500.000 / jam"],
      ["Print tambahan", "Rp300.000"],
    ],
  },
  {
    group: "Desain",
    items: [
      ["Custom frame design", "Rp250.000"],
      ["Custom welcome screen", "Rp150.000"],
    ],
  },
  {
    group: "Kru & Perangkat",
    items: [
      ["Usher", "Rp350.000"],
      ["Monitor", "Rp400.000"],
    ],
  },
  {
    group: "Pengalaman Tamu",
    items: [
      ["Audio Guest Book", "Rp750.000"],
      ["Properti tambahan", "mulai Rp150.000"],
    ],
  },
];

const quotes: [string, string, string, string][] = [
  [
    "Booth-nya rapi banget dan sama sekali nggak ganggu alur acara. Tim datang lebih awal, jadi pas tamu mulai masuk semuanya sudah siap dan tinggal dipakai.",
    "Dita & Raka",
    "Wedding, Bandung",
    resWedding.url,
  ],
  [
    "Tamu langsung ramai begitu photobooth dibuka. Antrenya tertib karena ada operator yang bantu arahkan, dan hasil fotonya keluar cepat banget.",
    "Nadia",
    "Birthday, Jakarta",
    resGathering.url,
  ],
  [
    "Hasilnya cepat dan kualitas print-nya enak dilihat. Frame-nya juga disesuaikan sama tema lamaran kami, jadi terasa personal buat tamu yang datang.",
    "Ayu & Fajar",
    "Engagement, Yogyakarta",
    resEngagement.url,
  ],
  [
    "Timnya bantu banget dari setup sampai acara selesai. Untuk kebutuhan corporate, tampilannya bisa dibikin sejalan dengan identitas brand kami.",
    "PT Arunika",
    "Corporate, Surabaya",
    resApoteker.url,
  ],
  [
    "Rapi tapi tetap terasa hidup sepanjang acara. Booth-nya jadi tempat kumpul sendiri, dan hampir semua tamu mampir minimal sekali untuk foto.",
    "Keluarga Wijaya",
    "Gathering, Bandung",
    resDokter.url,
  ],
  [
    "Banyak pengunjung pulang sambil bawa hasil fotonya. Buat activation, ini cara paling gampang bikin orang ingat brand tanpa terasa memaksa.",
    "Brand Loka",
    "Activation, Jakarta",
    resActivation.url,
  ],
];

const locations = [
  ["Bandung", "Jl. Braga No. 47", "Setiap hari, 10.00 — 21.00"],
  ["Yogyakarta", "Jl. Kaliurang Km 5,6", "Setiap hari, 10.00 — 22.00"],
  ["Surabaya", "Jl. Raya Darmo No. 88", "Selasa — Minggu, 11.00 — 21.00"],
  ["Jakarta Selatan", "Jl. Kemang Raya No. 12", "Setiap hari, 11.00 — 22.00"],
];

const soon = [
  ["360 Video Booth", "Putaran kamera yang bikin satu momen terasa sinematik.", "Q4 2026"],
  ["Audio Guest Book Corner", "Pesan suara tamu, tersimpan rapi untuk didengar nanti.", "Q4 2026"],
  ["Live Gallery Display", "Hasil sesi tampil langsung di layar besar venue.", "Q1 2027"],
];

const faqs = [
  [
    "Minimal booking berapa jam?",
    "Minimal 3 jam layanan, sudah termasuk setup dan bongkar booth di venue.",
  ],
  ["Apakah bisa soft file saja?", "Bisa. Paket A dirancang khusus untuk kebutuhan soft file tanpa print."],
  [
    "Apakah print sudah termasuk?",
    "Print photo strip termasuk pada Paket B, dan bisa ditambahkan pada paket lain.",
  ],
  ["Bisa custom desain frame?", "Bisa, melalui add-on custom frame design sesuai tema dan warna acaramu."],
  ["Apakah ada operator saat acara?", "Ya, operator standby sepanjang durasi layanan untuk membantu tamu."],
  ["Bisa tambah durasi?", "Bisa, penambahan durasi dihitung per jam dan bisa diputuskan di hari acara."],
  [
    "Area mana saja yang dilayani?",
    "Bandung, Yogyakarta, Surabaya, dan Jakarta Selatan, serta kota sekitarnya.",
  ],
];

const mapsUrl = (city?: string, addr?: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${addr}, ${city}`)}`;

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("rr-theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("rr-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="4.2" />
      <path
        strokeLinecap="round"
        d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z"
      />
    </svg>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const [menu, setMenu] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER — not sticky on mobile so the menu pushes content down */}
      <header className="relative z-50 border-b border-hairline bg-background/85 backdrop-blur md:sticky md:top-0">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
          <a href="#top" className="min-w-0">
            <span className="block truncate font-serif text-xl leading-none tracking-tight md:text-2xl">
              Rekam <em className="italic">Rasa</em>
            </span>
          </a>

          <div className="flex items-center gap-2 sm:gap-5">
            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={toggle}
              aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline transition-colors hover:border-foreground hover:bg-primary hover:text-primary-foreground"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="#konsultasi"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
            >
              Konsultasi Acara
            </a>

            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-label="Buka menu"
              aria-expanded={menu}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300 ${menu ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute top-1.5 left-0 block h-px w-4 bg-foreground transition-opacity duration-200 ${menu ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300 ${menu ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU — in flow, pushes hero down */}
        <div
          className={`grid overflow-hidden border-t transition-all duration-300 md:hidden ${menu ? "grid-rows-[1fr] border-hairline opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"}`}
        >
          <nav className="overflow-hidden">
            <div className="mx-auto max-w-[1180px] px-6 py-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenu(false)}
                  className="block border-b border-hairline py-3.5 font-serif text-xl last:border-b-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#konsultasi"
                onClick={() => setMenu(false)}
                className="mt-4 mb-4 block rounded-full bg-primary py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Konsultasi Acara
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-[1180px] px-6 pt-10 pb-16 md:pt-24 md:pb-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-stretch md:gap-10">
            <div className="order-1 md:order-2 md:col-span-5">
              <div className="h-full overflow-hidden rounded-[2px] border border-hairline">
                <img
                  src={heroStrips.url}
                  alt="Dua photo strip hasil photobooth Rekam Rasa dengan frame checkerboard dan pink"
                  className="aspect-[5/4] h-full w-full object-cover md:aspect-auto"
                  loading="eager"
                />
              </div>
            </div>

            <div className="order-2 md:order-1 md:col-span-7 md:pt-6">
              <p className="kicker wordmark-line">Photobooth untuk acara</p>
              <h1 className="mt-5 overflow-hidden font-serif text-[3rem] leading-[1.02] md:mt-6 md:text-[5.2rem]">
                <span className="wordmark-line" style={{ animationDelay: "80ms" }}>
                  Bikin tamu pulang
                </span>
                <br />
                <span className="wordmark-line" style={{ animationDelay: "200ms" }}>
                  bawa <em className="italic">momen.</em>
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
                Rekam Rasa menghadirkan layanan photobooth untuk wedding, engagement, birthday,
                corporate event, dan berbagai acara lainnya dengan setup rapi, hasil cepat, dan
                tampilan yang bisa disesuaikan.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#harga"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Lihat Harga
                </a>
                <a
                  href="#konsultasi"
                  className="rounded-full border border-hairline px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
                >
                  Konsultasi Acara
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO STATEMENT */}
        <section id="tentang" className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <p className="kicker md:col-span-3 md:pt-3">Tentang</p>
              <Reveal className="md:col-span-9">
                <h2 className="font-serif text-[2rem] leading-[1.18] md:text-[3.1rem]">
                  Ini bukan sekadar booth. Ini cara sederhana untuk bikin tamu ikut membawa pulang
                  suasana acara, <em className="italic">tanpa terasa berlebihan.</em>
                </h2>
                <p className="mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
                  Rekam Rasa dirancang untuk acara yang ingin terasa hangat, hidup, dan tetap rapi
                  dari awal sampai akhir.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ALASAN — bento boxes */}
        <section className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-serif text-[2.6rem] leading-[1.05] md:text-[4rem]">
                Kenapa <em className="italic">Rekam Rasa</em>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Enam hal kecil yang bikin acara terasa tertata dari awal sampai tamu pulang.
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-[2px] border border-hairline">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {reasons.map(([no, title, desc], i) => (
                  <Reveal
                    key={no}
                    delay={i * 70}
                    className="group -mt-px -ml-px flex min-h-[15rem] flex-col justify-between border-t border-l border-hairline bg-card p-7 transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="font-serif text-[3.4rem] leading-none text-foreground/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-primary-foreground/40">
                      {no}.
                    </span>
                    <div>
                      <h3 className="font-serif text-[1.7rem] leading-snug transition-transform duration-500 group-hover:translate-x-1">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                        {desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UNTUK ACARA — cards, no photos */}
        <section id="acara" className="rule bg-secondary/50">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-serif text-[2.4rem] leading-[1.05] md:text-[3.4rem]">
                Untuk acara
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Satu booth, banyak suasana. Kami menyesuaikan ritme acaramu, bukan sebaliknya.
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-[2px] border border-hairline">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {events.map(([name, desc], i) => (
                  <Reveal
                    key={name}
                    delay={i * 70}
                    className="group relative -mt-px -ml-px flex min-h-[13rem] flex-col justify-end overflow-hidden border-t border-l border-hairline bg-card p-7 transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
                  >
                    <h3 className="relative font-serif text-[1.9rem] leading-tight transition-transform duration-500 group-hover:translate-x-1">
                      {name}
                    </h3>
                    <p className="relative mt-2 max-w-[26ch] text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                      {desc}
                    </p>
                    <a
                      href="#konsultasi"
                      className="relative mt-6 inline-flex w-fit items-center gap-2 text-xs tracking-[0.16em] uppercase opacity-60 transition-all duration-500 group-hover:gap-3 group-hover:opacity-100"
                    >
                      Konsultasi acara ini
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEMA BOOTH + CUSTOM FRAME */}
        <section id="tema" className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[2.4rem] leading-[1.05] md:text-[3.4rem]">
                Tema booth
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                Tiga bentuk booth dengan karakter berbeda. Pilih yang paling pas dengan suasana
                venue dan tamu yang kamu undang.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2px] border border-hairline">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {booths.map(([t, d, img], i) => (
                  <Reveal
                    key={t}
                    delay={i * 80}
                    className="group -mt-px -ml-px flex flex-col border-t border-l border-hairline transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
                  >
                    <div className="overflow-hidden bg-secondary">
                      <img
                        src={img}
                        alt={`Booth photobooth Rekam Rasa bertema ${t}`}
                        className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="font-serif text-[1.7rem] leading-tight transition-transform duration-500 group-hover:translate-x-1">
                          {t}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                          {d}
                        </p>
                      </div>
                      <a
                        href="#konsultasi"
                        className="mt-6 inline-flex w-fit items-center gap-2 text-xs tracking-[0.18em] uppercase opacity-60 transition-all duration-500 group-hover:gap-3 group-hover:opacity-100"
                      >
                        Pakai booth ini
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* CUSTOM FRAME CATALOG */}
            <div className="mt-20 max-w-2xl md:mt-24">
              <p className="kicker">Katalog frame</p>
              <h2 className="mt-4 font-serif text-[2.2rem] leading-[1.05] md:text-[3rem]">
                Pilihan custom frame
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                Frame bisa disesuaikan dengan nama, tanggal, dan nuansa acaramu — dari yang bersih
                dan formal sampai yang penuh karakter.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2px] border border-hairline">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {themes.map(([t, d, img], i) => (
                  <Reveal
                    key={t}
                    delay={i * 60}
                    className="group -mt-px -ml-px flex flex-col border-t border-l border-hairline transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
                  >
                    <div className="overflow-hidden bg-secondary">
                      <img
                        src={img}
                        alt={`Contoh frame photobooth tema ${t}`}
                        className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="font-serif text-[1.6rem] leading-tight transition-transform duration-500 group-hover:translate-x-1">
                          {t}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                          {d}
                        </p>
                      </div>
                      <a
                        href="#konsultasi"
                        className="mt-6 inline-flex w-fit items-center gap-2 text-xs tracking-[0.18em] uppercase opacity-60 transition-all duration-500 group-hover:gap-3 group-hover:opacity-100"
                      >
                        Pakai tema ini
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HARGA */}
        <section id="harga" className="rule bg-secondary/60">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[2.4rem] leading-tight md:text-[3.4rem]">
                Harga jelas, sesuai durasi acara.
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                Mulai dari paket digital yang sederhana, lalu sesuaikan dengan print dan kebutuhan
                tambahan lainnya.
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-[2px] border border-hairline">
              <div className="grid lg:grid-cols-3">
                {packages.map((p, i) => (
                  <Reveal
                    key={p.name}
                    delay={i * 80}
                    className={`-mt-px -ml-px flex flex-col border-t border-l border-hairline p-8 transition-colors duration-500 ${
                      p.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-card hover:bg-secondary"
                    }`}
                  >
                    {p.featured ? (
                      <span className="mb-4 w-fit rounded-full border border-primary-foreground/40 px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase">
                        Paling direkomendasikan
                      </span>
                    ) : null}
                    <h3 className="font-serif text-2xl">{p.name}</h3>
                    <p
                      className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {p.sub}
                    </p>
                    <p className="mt-6 font-serif text-[2.4rem] leading-none">{p.price}</p>
                    <ul className="mt-8 flex-1">
                      {p.items.map((it) => (
                        <li
                          key={it}
                          className={`border-t py-3 text-sm leading-relaxed last:border-b ${
                            p.featured
                              ? "border-primary-foreground/20 text-primary-foreground/85"
                              : "border-hairline text-muted-foreground"
                          }`}
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#konsultasi"
                      className={`mt-8 rounded-full py-3 text-center text-sm font-medium transition-colors ${
                        p.featured
                          ? "bg-primary-foreground text-primary hover:opacity-90"
                          : "border border-foreground/80 hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      {p.cta}
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ADD-ON */}
        <section className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-serif text-[2rem] md:text-[2.6rem]">Add-on</h2>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Tambahan kecil yang bisa dipilih sesuai kebutuhan acara. Semua bisa dikombinasikan
                  dengan paket mana pun.
                </p>
              </div>
              <div className="grid gap-x-14 gap-y-10 md:col-span-8 md:grid-cols-2">
                {addonGroups.map((g, i) => (
                  <Reveal key={g.group} delay={i * 70}>
                    <p className="kicker">{g.group}</p>
                    <div className="mt-4">
                      {g.items.map(([name, price]) => (
                        <div
                          key={name}
                          className="group flex items-baseline justify-between gap-4 border-b border-hairline py-3.5 transition-colors hover:border-foreground"
                        >
                          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                            {name}
                          </span>
                          <span className="font-serif text-base text-muted-foreground">{price}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <h2 className="font-serif text-[2rem] md:text-[2.6rem]">Hasil acara</h2>
            <div className="mt-10 overflow-hidden rounded-[2px] border border-hairline">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                <Reveal className="-mt-px -ml-px overflow-hidden border-t border-l border-hairline sm:col-span-2">
                  <img
                    src={galleryMonitor.url}
                    alt="Layar photobooth Rekam Rasa menampilkan sesi tamu di acara pernikahan"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.04] sm:aspect-[10/4]"
                    loading="lazy"
                  />
                </Reveal>
                {results.map(([src, alt], i) => (
                  <Reveal
                    key={src}
                    delay={i * 60}
                    className="-mt-px -ml-px overflow-hidden border-t border-l border-hairline bg-secondary"
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONI — boxes with photo slip on hover */}
        <section className="rule bg-secondary/60">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-serif text-[2.4rem] leading-tight md:text-[3.2rem]">
                Cerita dari pengunjung
              </h2>
              <p className="text-sm text-muted-foreground">Arahkan kursor untuk lihat hasilnya.</p>
            </div>
            <div className="mt-12 overflow-hidden rounded-[2px] border border-hairline">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {quotes.map(([q, who, ev, img], i) => (
                  <Reveal
                    key={who}
                    delay={i * 70}
                    className="group relative -mt-px -ml-px flex min-h-[17rem] flex-col justify-between overflow-hidden border-t border-l border-hairline bg-card p-7 transition-colors duration-500 hover:bg-secondary"
                  >
                    <p className="relative z-10 max-w-[34ch] text-[0.95rem] leading-relaxed">“{q}”</p>
                    <div className="relative z-10 mt-8">
                      <p className="text-sm font-medium">{who}</p>
                      <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                        {ev}
                      </p>
                    </div>
                    {/* photo slip */}
                    <div className="pointer-events-none absolute right-5 bottom-0 w-24 translate-y-full rotate-[6deg] overflow-hidden rounded-t-[2px] border border-foreground/20 shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-5 md:w-28">
                      <img
                        src={img}
                        alt=""
                        aria-hidden="true"
                        className="aspect-[3/4] w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOKASI */}
        <section className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="kicker">Booth aktif</p>
              <h2 className="mt-4 font-serif text-[2rem] leading-tight md:text-[2.8rem]">
                Mampir langsung ke booth kami di beberapa kota.
              </h2>
            </div>
            <div className="mt-12">
              {locations.map(([city, addr, hours], i) => (
                <Reveal
                  key={city}
                  delay={i * 60}
                  className="group border-t border-hairline last:border-b"
                >
                  <a
                    href={mapsUrl(city, addr)}
                    target="_blank"
                    rel="noreferrer"
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-6 gap-y-1 py-7 transition-colors md:gap-x-10"
                  >
                    <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0">
                      <span className="block font-serif text-2xl transition-transform duration-300 group-hover:translate-x-1 md:text-[2.1rem]">
                        {city}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {addr} · {hours}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-xs tracking-[0.16em] uppercase">
                      <span className="hidden sm:inline">Lihat peta</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-hairline transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        ↗
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMING SOON — editorial columns, not a list */}
        <section className="rule bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-32">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-[0.66rem] tracking-[0.28em] uppercase opacity-60">Dalam proses</p>
                <h2 className="mt-5 font-serif text-[2.6rem] leading-[1.03] md:text-[3.6rem]">
                  Segera <em className="italic">hadir</em>
                </h2>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
                  Tiga hal baru yang sedang kami siapkan untuk acara berikutnya.
                </p>
              </div>
              <div className="md:col-span-8">
                {soon.map(([title, desc, when], i) => (
                  <Reveal
                    key={title}
                    delay={i * 90}
                    className="group border-b border-dashed border-primary-foreground/25 first:border-t"
                  >
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-8 md:py-10">
                      <div className="min-w-0">
                        <h3 className="font-serif text-[1.9rem] leading-tight transition-transform duration-500 group-hover:translate-x-2 md:text-[2.6rem]">
                          {title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/65">
                          {desc}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-primary-foreground/35 px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase opacity-80 transition-colors duration-500 group-hover:bg-primary-foreground group-hover:text-primary">
                        {when}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <h2 className="font-serif text-[2rem] md:col-span-4 md:text-[2.6rem]">
                Sering ditanya
              </h2>
              <div className="md:col-span-8">
                {faqs.map(([q, a], i) => (
                  <div key={q} className="border-b border-hairline first:border-t">
                    <button
                      type="button"
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[0.95rem] font-medium">{q}</span>
                      <span
                        className={`text-lg text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                    >
                      <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                        {a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA — with photo strip gimmicks */}
        <section id="konsultasi" className="rule">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <Reveal className="relative overflow-hidden rounded-[8px] border border-foreground bg-primary px-6 py-20 text-center text-primary-foreground md:px-16 md:py-32">
              {/* gimmick strips */}
              <img
                src={heroStrips.url}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -left-14 hidden w-52 rotate-[-14deg] rounded-[3px] border border-primary-foreground/20 opacity-25 transition-transform duration-700 hover:rotate-[-8deg] md:block"
              />
              <img
                src={heroStrips.url}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -bottom-14 hidden w-56 rotate-[12deg] rounded-[3px] border border-primary-foreground/20 opacity-25 md:block"
              />
              <span className="pointer-events-none absolute top-10 right-12 hidden font-serif text-[1.6rem] opacity-30 md:block">
                ✦
              </span>
              <span className="pointer-events-none absolute bottom-14 left-16 hidden font-serif text-[1.2rem] opacity-25 md:block">
                ✦
              </span>

              <div className="relative">
                <p className="text-[0.66rem] tracking-[0.28em] uppercase opacity-70">
                  Siap booking acaramu
                </p>
                <h2 className="mx-auto mt-6 max-w-3xl font-serif text-[2.3rem] leading-[1.08] md:text-[4rem]">
                  Kalau acaranya spesial, booth-nya juga harus{" "}
                  <em className="italic">terasa pas.</em>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-primary-foreground/70">
                  Ceritakan kebutuhan acaramu, lalu kami bantu siapkan photobooth yang sesuai dari
                  durasi, tampilan, sampai hasil akhirnya.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Konsultasi via WhatsApp
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="#harga"
                    className="rounded-full border border-primary-foreground/50 px-8 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    Lihat Paket
                  </a>
                </div>
                <p className="mt-8 text-xs tracking-[0.14em] text-primary-foreground/50 uppercase">
                  Balasan cepat · Jadwal terbatas tiap akhir pekan
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WORDMARK MARQUEE */}
        <section className="rule marquee-mask py-10">
          <div className="marquee-track gap-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="font-serif text-[3rem] leading-none whitespace-nowrap text-muted-foreground md:text-[5rem]"
              >
                Rekam <em className="italic">Rasa</em> ·
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="rule">
        <div className="mx-auto max-w-[1180px] px-6 py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="font-serif text-[2.4rem] leading-none md:text-[3.2rem]">
                Rekam <em className="italic">Rasa</em>
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Photobooth rental untuk acara</p>
            </div>
            <div className="md:col-span-3">
              <p className="kicker">Kota</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {locations.map(([city, addr]) => (
                  <li key={city}>
                    <a
                      href={mapsUrl(city, addr)}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3">
              <p className="kicker">Kontak</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-14 border-t border-hairline pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rekam Rasa. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
