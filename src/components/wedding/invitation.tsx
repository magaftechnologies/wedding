import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronLeft, ChevronRight, Flame, Flower2, Footprints, Heart, MapPin, MessageCircle, Pause, Play, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { countdownAt, events, rsvpSchema, wedding } from "@/lib/wedding";
import { MemoryCarousel } from "@/components/wedding/memory-carousel";
import { clientPhotos, memoryPhotos, memoryCaptions } from "@/lib/wedding-media";
import music from "@/assets/music.mp3.asset.json";
import film from "@/assets/couple-memory.mp4.asset.json";
import { Entrance } from "./entrance";
import { DappuIcon, Ornament } from "./ornament";

const photos = memoryPhotos;
const captions = memoryCaptions;
type Language = "en" | "te";
const labels = {
  en: { story: "Our Story", journey: "The Wedding Chronicles", memories: "Our Memories", venue: "The Venue", rsvp: "RSVP", together: "Together with our families", hero: "We’re getting married", line: "And we would love to have you by our side.", view: "Explore our celebration", blessing: "An invitation from our hearts", message: "With the blessings of our parents and the love of our families, we joyfully invite you to celebrate our wedding. Join us as we begin a lifetime of love, laughter, and togetherness.", families: "With love, the families of Akshay & Sandhya", storySub: "Some things are simply meant to be.", journeySub: "30 November – 4 December 2026", countdown: "Until our forever begins", countdownSub: "Every moment brings us closer to you.", venueSub: "A beautiful place to begin our forever.", directions: "View on Google Maps", memoriesSub: "Little moments, held close to our hearts.", film: "Love, in motion", filmSub: "A little glimpse of our beautiful togetherness.", join: "Will you join us?", joinSub: "Our celebration would be incomplete without you.", name: "Your name", placeholder: "Enter your full name", yes: "Yes, I’ll be there", maybe: "Maybe, I’ll let you know", no: "Sorry, I can’t attend", send: "Send our RSVP", thanks: "Thank you for being part of our special day.", end: "We look forward to celebrating with you.", demoNote: "Demo RSVP only — responses are not saved or sent.", demoComplete: "Thank you! This demo RSVP was not saved or sent.", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  te: { story: "మా ప్రేమ కథ", journey: "వివాహ ప్రయాణం", memories: "మా జ్ఞాపకాలు", venue: "వివాహ వేదిక", rsvp: "మీ ఆహ్వానం", together: "మా కుటుంబాల ఆశీస్సులతో", hero: "మా వివాహ వేడుక", line: "మా ఆనందంలో మీరు భాగస్వాములు కావాలని కోరుకుంటున్నాము.", view: "మా వేడుకలను చూడండి", blessing: "మా హృదయపూర్వక ఆహ్వానం", message: "మా తల్లిదండ్రుల ఆశీస్సులతో, కుటుంబ సభ్యుల ప్రేమతో మా వివాహ మహోత్సవానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము. ప్రేమ, ఆనందం మరియు అనుబంధంతో మా కొత్త జీవితాన్ని ప్రారంభించే ఈ శుభ సందర్భంలో మీ సమక్షం మాకు ఎంతో విలువైనది.", families: "ప్రేమతో, అక్షయ్ మరియు సంధ్య కుటుంబ సభ్యులు", storySub: "కొన్ని బంధాలు కలకాలం నిలిచిపోతాయి.", journeySub: "30 November – 4 December 2026", countdown: "మా కొత్త జీవితం ప్రారంభమయ్యే వరకు", countdownSub: "ప్రతి క్షణం మిమ్మల్ని మాకు చేరువ చేస్తుంది.", venueSub: "అందమైన ప్రారంభానికి అద్భుతమైన వేదిక.", directions: "మార్గం చూడండి", memoriesSub: "మా హృదయాల్లో నిలిచిపోయిన మధుర క్షణాలు.", film: "మా ప్రేమ దృశ్యాలు", filmSub: "మా ఆనందకరమైన అనుబంధం.", join: "మీరు మాతో చేరుతారా?", joinSub: "మీ సమక్షం మా వేడుకకు ఎంతో ప్రత్యేకం.", name: "మీ పేరు", placeholder: "మీ పూర్తి పేరు రాయండి", yes: "అవును, నేను వస్తాను", maybe: "వచ్చేందుకు ప్రయత్నిస్తాను", no: "క్షమించండి, రాలేను", send: "నా స్పందన పంపండి", thanks: "మా ప్రత్యేక రోజులో భాగమైనందుకు ధన్యవాదాలు.", end: "మీతో కలిసి వేడుక జరుపుకోవాలని ఎదురుచూస్తున్నాము.", demoNote: "ఇది డెమో RSVP మాత్రమే — మీ స్పందన సేవ్ చేయబడదు లేదా పంపబడదు.", demoComplete: "ధన్యవాదాలు! ఈ డెమో RSVP సేవ్ చేయబడలేదు లేదా పంపబడలేదు.", days: "రోజులు", hours: "గంటలు", minutes: "నిమిషాలు", seconds: "సెకన్లు" },
};
function Heading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="section-heading"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2><Ornament />{subtitle && <p>{subtitle}</p>}</div>;
}
function Section({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  return <section id={id} className={`section ${className}`}><div className="section-inner">{children}</div></section>;
}
function EventIcon({ kind }: { kind: string }) {
  if (kind === "sun") return <Sun />;
  if (kind === "flower") return <Flower2 />;
  if (kind === "flame") return <Flame />;
  return <Heart />;
}
function Countdown({ language }: { language: Language }) {
  const [count, setCount] = useState<ReturnType<typeof countdownAt> | null>(null);
  useEffect(() => { const update = () => setCount(countdownAt(Date.now())); update(); const timer = setInterval(update, 1000); return () => clearInterval(timer); }, []);
  const t = labels[language];
  return <div className="countdown">{(["days", "hours", "minutes", "seconds"] as const).map((key) => <div className="countdown-unit" key={key}><strong>{count ? String(count[key]).padStart(2, "0") : "—"}</strong><span>{t[key]}</span></div>)}</div>;
}
function Journey({ language }: { language: Language }) {
  const track = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const drawn = useRef<SVGPathElement>(null);
  const feet = useRef<(HTMLSpanElement | null)[]>([]);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const [shape, setShape] = useState({ width: 0, height: 0, d: "" });
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => {
      const box = el.getBoundingClientRect();
      const points = nodes.current.flatMap((node) => {
        if (!node) return [];
        const nodeBox = node.getBoundingClientRect();
        return [{ x: nodeBox.left - box.left + nodeBox.width / 2, y: nodeBox.top - box.top + nodeBox.height / 2 }];
      });
      if (!points.length) return;
      const all = [
        { x: points[0].x, y: Math.max(0, points[0].y - 90) },
        ...points,
        { x: points[points.length - 1].x, y: box.height },
      ];
      let d = `M${all[0].x} ${all[0].y}`;
      for (let i = 1; i < all.length; i++) {
        const a = all[i - 1]; const b = all[i];
        if (!a || !b) continue;
        const mid = (b.y - a.y) * .5;
        d += ` C${a.x} ${a.y + mid} ${b.x} ${b.y - mid} ${b.x} ${b.y}`;
      }
      setShape({ width: box.width, height: box.height, d });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const el = track.current; const line = path.current;
    if (!el || !line || !shape.d) return;
    const total = line.getTotalLength();
    if (drawn.current) drawn.current.style.strokeDasharray = `${total}`;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let shown = -1; let frame = 0;
    const target = () => {
      const r = el.getBoundingClientRect();
      return Math.min(1, Math.max(0, (window.innerHeight * .6 - r.top) / r.height));
    };
    const tick = () => {
      const goal = target();
      shown = shown < 0 || reduced ? goal : shown + (goal - shown) * .12;
      if (drawn.current) drawn.current.style.strokeDashoffset = `${total * (1 - shown)}`;
      feet.current.forEach((foot, index) => {
        if (!foot) return;
        const at = Math.max(0, shown * total - index * 26);
        const p = line.getPointAtLength(at);
        const q = line.getPointAtLength(Math.min(total, at + 2));
        const angle = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI + 90;
        const side = index % 2 ? 6 : -6;
        const rad = (angle) * Math.PI / 180;
        foot.style.transform = `translate(${p.x + Math.cos(rad) * side}px, ${p.y + Math.sin(rad) * side}px) translate(-50%, -50%) rotate(${angle}deg)`;
        foot.style.opacity = shown > .002 ? `${1 - index * .2}` : "0";
      });
      if (Math.abs(goal - shown) > .0005) frame = requestAnimationFrame(tick);
      else frame = 0;
    };
    const update = () => { if (!frame) frame = requestAnimationFrame(tick); };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [shape]);
  useEffect(() => {
    const items = track.current?.querySelectorAll(".journey-event");
    if (!items) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }), { threshold: .25 });
    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);
  return <div className="journey" ref={track}>
    {shape.d && <svg className="journey-track" width={shape.width} height={shape.height} viewBox={`0 0 ${shape.width} ${shape.height}`} aria-hidden="true">
      <path className="journey-path-halo" d={shape.d} />
      <path className="journey-path-faint" ref={path} d={shape.d} />
      <path className="journey-path" ref={drawn} d={shape.d} />
    </svg>}
    <div className="journey-footprints" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => <span className="journey-footstep" key={i} ref={(n) => { feet.current[i] = n; }}><Footprints size={18} /></span>)}
    </div>
    {events.map((event, index) => <article className={`journey-event ${index % 2 ? "is-right" : "is-left"}`} key={event.name}>
      <div className="event-card">
        <div className="event-photo-wrap"><img className="event-photo" src={photos[event.image]?.url} alt={captions[event.image]} loading="lazy" /></div>
        <div className="event-info"><span className="event-number">{String(index + 1).padStart(2, "0")}</span><p className="eyebrow">{event.date} {event.month} 2026</p><h3>{language === "te" ? event.telugu : event.name}</h3><p className="event-time">{event.time}</p><p className="event-description">{event.description}</p></div>
      </div>
      <div className="event-node" ref={(n) => { nodes.current[index] = n; }}><EventIcon kind={event.symbol} /></div>
    </article>)}
  </div>;
}
function RSVP({ language }: { language: Language }) {
  const t = labels[language];
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("yes");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const parsed = rsvpSchema.safeParse({ name, attendance });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check your response."); return; }
    setSubmitted(true);
  }
  if (submitted) return <div className="rsvp-status" role="status"><Check className="mx-auto mb-4 text-gold" size={28} />{t.demoComplete}<div className="mt-5"><Button variant="ceremony" onClick={() => { setSubmitted(false); setName(""); }}>Add another guest</Button></div></div>;
  return <form className="rsvp-form" onSubmit={submit}>
    <p className="rsvp-demo-note">{t.demoNote}</p>
    <label className="field-label" htmlFor="guest-name">{t.name}</label>
    <input className="rsvp-input" id="guest-name" autoComplete="name" placeholder={t.placeholder} maxLength={100} value={name} onChange={(event) => setName(event.target.value)} required />
    <fieldset className="attendance-options"><legend className="sr-only">Attendance</legend>{([['yes', t.yes], ['maybe', t.maybe], ['no', t.no]] as const).map(([value, label]) => <label className="attendance-option" key={value}><input type="radio" name="attendance" value={value} checked={attendance === value} onChange={() => setAttendance(value)} />{label}</label>)}</fieldset>
    {error && <p className="rsvp-error" role="alert">{error}</p>}
    <Button variant="ceremony" type="submit" className="rsvp-submit">{t.send}<ArrowUpRight /></Button>
  </form>;
}

export function Invitation() {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false);
  const [lightbox, setLightbox] = useState<number | "video" | null>(null);
  const audio = useRef<HTMLAudioElement>(null);
  const pauseUntil = useRef(0);
  const swipeStart = useRef(0);
  const restoreMusic = useRef(false);
  const t = labels[language];
  useEffect(() => {
    const old = document.body.style.overflow;
    if (!opened || lightbox !== null) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = old; };
  }, [opened, lightbox]);
  useEffect(() => {
    if (!opened || !autoScroll || lightbox !== null || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    pauseUntil.current = performance.now() + 9000;
    let frame = 0, last = 0, position = window.scrollY;
    function animate(now: number) {
      const delta = last ? Math.min(now - last, 50) : 0; last = now;
      if (now > pauseUntil.current && !document.hidden && window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 1) { position += delta * .012; window.scrollTo({ top: position, behavior: "instant" }); } else { position = window.scrollY; }
      frame = requestAnimationFrame(animate);
    }
    const pause = () => { pauseUntil.current = performance.now() + 12000; position = window.scrollY; };
    window.addEventListener("wheel", pause, { passive: true }); window.addEventListener("touchstart", pause, { passive: true }); window.addEventListener("pointerdown", pause); window.addEventListener("keydown", pause);
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("wheel", pause); window.removeEventListener("touchstart", pause); window.removeEventListener("pointerdown", pause); window.removeEventListener("keydown", pause); };
  }, [opened, autoScroll, lightbox]);
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); if (typeof lightbox === "number") { if (e.key === "ArrowRight") setLightbox((lightbox + 1) % photos.length); if (e.key === "ArrowLeft") setLightbox((lightbox + photos.length - 1) % photos.length); } };
    window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);
  async function toggleMusic() {
    if (!audio.current) return;
    if (musicPlaying) { audio.current.pause(); setMusicPlaying(false); }
    else { try { await audio.current.play(); setMusicPlaying(true); } catch { setMusicPlaying(false); } }
  }
  function openVideo() { restoreMusic.current = musicPlaying; audio.current?.pause(); setMusicPlaying(false); setLightbox("video"); }
  function closeLightbox() { setLightbox(null); if (restoreMusic.current) { void audio.current?.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false)); restoreMusic.current = false; } }
  function goTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }
  return <>
    <audio ref={audio} src={music.url} loop preload="none" />
    <Entrance onOpen={() => { setOpening(true); void toggleMusic(); }} onComplete={() => { setOpened(true); window.scrollTo(0, 0); }} />
    <main className={opening ? "invitation-opening" : ""} inert={!opened} aria-hidden={!opened} lang={language === "te" ? "te" : "en"}>
      <header className="site-header"><a href="#couple" className="monogram" aria-label="Akshay and Sandhya">A♡S</a><nav className="site-nav" aria-label="Invitation sections"><a href="#story">{t.story}</a><a href="#journey">{t.journey}</a><a href="#memories">{t.memories}</a><a href="#rsvp">{t.rsvp}</a></nav><div className="language-switch"><Button variant="weddingGhost" aria-pressed={language === "te"} onClick={() => setLanguage("te")}>తెలుగు</Button><span aria-hidden="true">/</span><Button variant="weddingGhost" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</Button></div></header>
      <section className="hero" id="couple">
        <img className="hero-backdrop" src={clientPhotos.romantic.url} alt="Akshay and Sandhya sharing a close, joyful embrace" fetchPriority="high" />
        <div className="hero-copy"><div className="eyebrow">{t.together}</div><h1>AKSHAY <em>♡</em> SANDHYA</h1><p className="hero-invitation">{t.line}</p><div className="hero-date">4 DECEMBER 2026 <span /> {wedding.time}</div><p className="hero-venue">Narayanapet</p><Button variant="ceremony" onClick={() => goTo("journey")}>{t.view}<ArrowDown /></Button></div>
      </section>
      <Section className="blessing-section"><div className="blessing"><div className="sanskrit">Om Shri Ganeshaya Namaha<br />Shubhamasthu Avighnamasthu</div><Ornament /><div className="eyebrow">{language === "te" ? "శుభలేఖ" : "Wedding Invitation"}</div><h2>{t.blessing}</h2><p className="message">{t.message}</p></div>
        <div className="family-layout"><div className="family-person groom-family"><p className="eyebrow">{language === "te" ? "వరుడు" : "The Groom"}</p><h3>{wedding.groomFormal}</h3><p>{language === "te" ? "ఏకైక కుమారుడు" : "Only son of"}</p><strong>{wedding.groomParents}</strong></div><Ornament /><div className="family-person bride-family"><p className="eyebrow">{language === "te" ? "వధువు" : "The Bride"}</p><h3>{wedding.brideFormal}</h3><p>{language === "te" ? "ఏకైక కుమార్తె" : "Only daughter of"}</p><strong>{wedding.brideParents}</strong><p className="family-residence">{wedding.brideResidence}</p></div></div>
        <div className="family-blessings"><div className="blessing-group divine-blessings"><p className="eyebrow">{language === "te" ? "దివ్య ఆశీస్సులతో" : "With divine blessings of"}</p>{wedding.divineBlessings.map((name) => <p key={name}>{name}</p>)}</div><div className="blessing-group family-blessing"><p className="eyebrow">{language === "te" ? "ఆశీస్సులతో" : "With blessings of"}</p>{wedding.blessings.map((name) => <p key={name}>{name}</p>)}</div></div>
      </Section>
      <Section id="story" className="story-section"><Heading eyebrow="Love · Tradition · Togetherness" title={t.story} /><div className="client-story"><img className="emotional-photo" src={clientPhotos.silhouette.url} alt="Akshay and Sandhya together in a black and white silhouette" loading="lazy" /><div className="story-words"><h3>{language === "te" ? <>రెండు హృదయాలు.<br />ఒక అందమైన ఆరంభం.</> : <>Two hearts.<br />One beautiful beginning.</>}</h3><Ornament /><p>{language === "te" ? "ప్రేమ, సంప్రదాయం, అనుబంధాల వేడుక." : "A celebration of love, tradition and togetherness."}</p><img className="ring-moment" src={clientPhotos.rings.url} alt="Akshay and Sandhya holding their rings together" loading="lazy" /><p className="ring-caption">{language === "te" ? "కలకాలం కలిసే అడుగులు" : "A promise, held close."}</p></div></div></Section>
      <Section id="journey" className="journey-section"><Heading eyebrow="Let the celebrations begin" title={t.journey} subtitle={t.journeySub} /><Journey language={language} /></Section>
      <Section id="wedding" className="main-wedding-section"><Heading eyebrow={language === "te" ? "శుభ ముహూర్తం" : "The Wedding · Sumuhurtham"} title="AKSHAY ♡ SANDHYA" /><img className="formal-wedding-photo" src={clientPhotos.formal.url} alt="Akshay Yadav and Sandhya Rani wearing wedding garlands" loading="lazy" /><div className="main-wedding-details"><p>{wedding.displayDate}</p><h3>{wedding.time}</h3><p>{wedding.lagnam}</p><Ornament /><p>{language === "te" ? "సభా లగ్నం" : "Sabha Lagnam"} · {wedding.sabhaLagnam}</p></div></Section>
      <Section id="memories" className="gallery-section"><Heading eyebrow="The moments we treasure" title={t.memories} subtitle={t.memoriesSub} /><MemoryCarousel photos={photos} captions={captions} onOpen={(index) => setLightbox(index)} /></Section>
      <section className="countdown-section"><div className="eyebrow">4 December 2026 · {wedding.time}</div><h2>{t.countdown}</h2><Ornament /><Countdown language={language} /><p className="countdown-caption">{t.countdownSub}</p></section>
      <Section id="venue" className="venue-section"><Heading eyebrow="Narayanapet" title={t.venue} subtitle={t.venueSub} /><div className="venue-layout"><img className="venue-picture" src={clientPhotos.venue.url} alt="Client-provided exterior photograph of Sri Garden Function Hall" loading="lazy" /><div className="venue-info"><h3>{wedding.venue}</h3><p>{wedding.address}</p><p className="venue-day">{wedding.displayDate}<br />Sumuhurtham · {wedding.time}<br />{wedding.lagnam}<br />Sabha Lagnam · {wedding.sabhaLagnam}</p><Button variant="wedding" asChild><a href={wedding.directions} target="_blank" rel="noopener noreferrer"><MapPin />{t.directions}<ArrowUpRight /></a></Button></div></div><iframe className="venue-map" title="Map search for Sri Garden Function Hall, Narayanapet" src={`https://maps.google.com/maps?q=${encodeURIComponent(`${wedding.venue} ${wedding.address}`)}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></Section>
      <Section className="video-section"><Heading eyebrow="A celebration in motion" title={t.film} subtitle={t.filmSub} /><div className="memory-film"><img src={clientPhotos.landscape.url} alt="Akshay and Sandhya in traditional wedding attire" loading="lazy" /><Button className="film-play" variant="weddingGhost" aria-label="Play couple video" onClick={openVideo}><Play /></Button></div><p className="film-caption">A love to remember</p></Section>
      <Section id="rsvp" className="rsvp-section"><Heading eyebrow="Your presence is our present" title={t.join} subtitle={t.joinSub} /><RSVP language={language} /></Section>
      <Section className="thankyou-section"><img className="thankyou-portrait" src={clientPhotos.intimate.url} alt="Akshay and Sandhya" loading="lazy" /><Ornament /><h2>{t.thanks}</h2><p>{t.end}</p><div className="footer-signature">With love, Akshay & Sandhya</div></Section>
      <footer className="site-footer"><p>Want an invitation like this? Contact us.</p><strong>MAGAF Technologies</strong><a href="tel:+919948560279">+91 9948560279</a></footer>
    </main>
    {opened && <><div className="floating-tools left"><Button className={`floating-button ${musicPlaying ? "music-playing" : ""}`} variant="weddingGhost" title={musicPlaying ? "Pause wedding music" : "Play wedding music"} aria-label={musicPlaying ? "Pause wedding music" : "Play wedding music"} aria-pressed={musicPlaying} onClick={() => void toggleMusic()}><DappuIcon /></Button><Button className="floating-button" variant="weddingGhost" title={autoScroll ? "Pause invitation stroll" : "Resume invitation stroll"} aria-label={autoScroll ? "Pause invitation stroll" : "Resume invitation stroll"} aria-pressed={autoScroll} onClick={() => setAutoScroll(!autoScroll)}>{autoScroll ? <Pause /> : <Play />}</Button></div><div className="floating-tools right"><Button className="floating-button" variant="weddingGhost" title="Share invitation on WhatsApp" aria-label="Share invitation on WhatsApp" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Join us for Akshay & Sandhya’s wedding on 4 December 2026 at Sri Garden Function Hall A/C, Narayanapet! ${window.location.origin}`)}`, "_blank", "noopener,noreferrer")}><MessageCircle /></Button></div></>}
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox === "video" ? "Couple video" : "Wedding photo gallery"} onClick={closeLightbox} onTouchStart={(e) => { swipeStart.current = e.touches[0]?.clientX ?? 0; }} onTouchEnd={(e) => { const end = e.changedTouches[0]?.clientX ?? swipeStart.current; if (typeof lightbox === "number" && Math.abs(end - swipeStart.current) > 45) setLightbox((lightbox + (end < swipeStart.current ? 1 : photos.length - 1)) % photos.length); }}><Button className="floating-button lightbox-close" variant="weddingGhost" aria-label="Close gallery" autoFocus onClick={closeLightbox}><X /></Button>{lightbox === "video" ? <video className="lightbox-video" src={film.url} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} /> : <><Button className="floating-button lightbox-prev" variant="weddingGhost" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + photos.length - 1) % photos.length); }}><ChevronLeft /></Button><img className="lightbox-image" src={photos[lightbox]?.url} alt={captions[lightbox]} onClick={(e) => e.stopPropagation()} /><Button className="floating-button lightbox-next" variant="weddingGhost" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}><ChevronRight /></Button><p className="lightbox-caption">{captions[lightbox]} · {lightbox + 1} / {photos.length}</p></>}</div>}
  </>;
}
