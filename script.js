:root{
  --bg:#0f1113;
  --card: rgba(255,255,255,0.06);
  --glass: rgba(255,255,255,0.06);
  --accent: linear-gradient(135deg,#6dd3ff 0%,#8b6dff 100%);
  --muted: rgba(255,255,255,0.65);
  --glass-border: rgba(255,255,255,0.08);
  --radius: 14px;
  --gap: 18px;
  --max-width: 1100px;
  --shadow: 0 8px 30px rgba(2,6,23,0.6);
  font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color-scheme: dark;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  background: linear-gradient(180deg,#0b0c0d 0%, #0f1113 100%);
  color:#fff;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.45;
  overflow-x:hidden;
}

/* Container */
.container{
  width:calc(100% - 32px);
  max-width:var(--max-width);
  margin:0 auto;
  padding:28px 16px;
}

/* Hero */
.hero{
  position:relative;
  min-height:72vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:28px 0;
  overflow:hidden;
}

.hero-inner{
  display:grid;
  grid-template-columns:1fr;
  gap:24px;
  align-items:center;
  width:100%;
}

/* Hero media */
.hero-media{
  position:absolute;
  inset:0;
  z-index:0;
  overflow:hidden;
  pointer-events:none;
}
.hero-img{
  width:100%;
  height:100%;
  object-fit:cover;
  transform:scale(1.06);
  filter:contrast(1.02) saturate(1.05) brightness(0.9);
  transition:transform .9s cubic-bezier(.2,.9,.2,1);
}
.hero:hover .hero-img{transform:scale(1.08)}
.hero-overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(180deg, rgba(6,8,10,0.25), rgba(6,8,10,0.6));
  mix-blend-mode:multiply;
}

/* Glass card */
.hero-card{
  position:relative;
  z-index:2;
  max-width:920px;
  margin:0 auto;
  padding:28px;
  border-radius:18px;
  background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  border:1px solid var(--glass-border);
  box-shadow:var(--shadow);
  backdrop-filter: blur(12px) saturate(120%);
}

/* Typography */
.place-title{
  margin:0 0 6px 0;
  font-weight:700;
  font-size:clamp(20px,4.6vw,34px);
  letter-spacing:-0.02em;
}
.place-sub{
  margin:0 0 18px 0;
  color:var(--muted);
  font-weight:400;
}

/* Quick info */
.quick-info{
  display:flex;
  gap:18px;
  flex-wrap:wrap;
  margin-bottom:18px;
}
.info-item{min-width:140px}
.info-item strong{display:block;font-weight:600}
.info-item span, .info-item a{color:var(--muted);text-decoration:none}

/* Buttons */
.btn{
  display:inline-block;
  padding:10px 16px;
  border-radius:12px;
  text-decoration:none;
  font-weight:600;
  font-size:14px;
  transition:transform .18s ease, box-shadow .18s ease;
  border:1px solid transparent;
}
.btn:hover{transform:translateY(-3px)}
.btn.primary{
  background:var(--accent);
  color:#061018;
  box-shadow:0 8px 30px rgba(139,109,255,0.12);
}
.btn.ghost{
  background:transparent;
  border:1px solid rgba(255,255,255,0.06);
  color:var(--muted);
}

/* Split section */
.split{
  display:grid;
  grid-template-columns:1fr;
  gap:20px;
  align-items:center;
  margin-top:28px;
}
.split-media{
  width:100%;
  height:220px;
  overflow:hidden;
  border-radius:14px;
  box-shadow:var(--shadow);
}
.split-media img{width:100%;height:100%;object-fit:cover;transform:scale(1.03);transition:transform .9s}
.split-media:hover img{transform:scale(1.06)}
.split-text{
  padding:20px;
  border-radius:14px;
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border:1px solid var(--glass-border);
}

/* Features */
.features{margin:12px 0 18px 0;padding:0;list-style:none;color:var(--muted)}
.features li{margin:8px 0}

/* Gallery */
.gallery h3{margin:0 0 12px 0}
.gallery-wrap{
  display:flex;
  align-items:center;
  gap:12px;
  position:relative;
}
.gallery-slider{
  display:flex;
  gap:12px;
  overflow:hidden;
  width:100%;
  scroll-behavior:smooth;
}
.slide{
  min-width:72%;
  max-width:72%;
  border-radius:14px;
  overflow:hidden;
  position:relative;
  flex-shrink:0;
  background:#0b0c0d;
  transition:transform .5s cubic-bezier(.2,.9,.2,1), opacity .5s;
  box-shadow:var(--shadow);
}
.slide img{width:100%;height:420px;object-fit:cover;display:block}
.slide figcaption{
  position:absolute;
  left:16px;
  bottom:16px;
  color:#fff;
  font-weight:600;
  text-shadow:0 6px 18px rgba(0,0,0,0.6);
}
.gallery-nav{
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(255,255,255,0.06);
  color:#fff;
  width:44px;height:44px;border-radius:10px;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;
}
.gallery-dots{display:flex;gap:8px;margin-top:12px;justify-content:center}
.gallery-dots button{
  width:10px;height:10px;border-radius:50%;border:none;background:rgba(255,255,255,0.06);cursor:pointer;
}
.gallery-dots button.active{background:linear-gradient(90deg,#6dd3ff,#8b6dff)}

/* Contact */
.contact{
  display:grid;
  grid-template-columns:1fr;
  gap:18px;
  align-items:start;
  margin-bottom:48px;
}
.contact-card{
  padding:20px;border-radius:14px;border:1px solid var(--glass-border);
}
.contact-grid{display:grid;grid-template-columns:repeat(1,1fr);gap:12px}
.contact-grid a{color:var(--muted);text-decoration:none}
.map-preview{border-radius:14px;overflow:hidden;position:relative}
.map-preview img{width:100%;height:220px;object-fit:cover;display:block}
.map-overlay{
  position:absolute;inset:auto 12px 12px 12px;padding:10px;border-radius:12px;
  display:inline-block;background:linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border:1px solid var(--glass-border);
  backdrop-filter: blur(8px);
}

/* Footer */
.site-footer{padding:18px 0;text-align:center;color:var(--muted);border-top:1px solid rgba(255,255,255,0.02)}

/* Responsive */
@media(min-width:880px){
  .hero-inner{grid-template-columns:1fr}
  .split{grid-template-columns:1fr 1fr;gap:28px}
  .gallery-slider .slide{min-width:48%;max-width:48%}
  .contact{grid-template-columns:1fr 360px}
  .contact-grid{grid-template-columns:1fr}
}

/* Animations & reveal */
.fade-in{opacity:0;transform:translateY(10px);transition:opacity .7s ease, transform .7s ease}
.fade-in.show{opacity:1;transform:none}
