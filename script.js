// Basic interactive behaviors: gallery slider, scroll reveal, parallax, and dynamic placeholders.
// Replace placeholder data below with actual details from the Google Maps listing.

document.addEventListener('DOMContentLoaded', function () {
  // Placeholder data (replace with real values)
  const data = {
    name: '[PLACE NAME]',
    description: '[Short description — replace with actual description]',
    address: '[Address not available]',
    phone: '+0000000000',
    hours: '[Opening hours not available]',
    mapsUrl: 'https://maps.app.goo.gl/ocfqPsAp1ABtetB26'
  };

  // Populate fields
  document.querySelector('.place-title').textContent = data.name;
  document.querySelector('.place-sub').textContent = data.description;
  document.getElementById('address').textContent = data.address;
  document.getElementById('hours').textContent = data.hours;
  document.getElementById('phone').textContent = data.phone;
  document.getElementById('phone').href = 'tel:' + data.phone;
  document.getElementById('contact-phone').textContent = data.phone;
  document.getElementById('contact-phone').href = 'tel:' + data.phone;
  document.getElementById('contact-address').textContent = data.address;
  document.getElementById('cta-map').href = data.mapsUrl;
  document.querySelectorAll('a[href="https://maps.app.goo.gl/ocfqPsAp1ABtetB26"]').forEach(a => a.href = data.mapsUrl);

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Gallery slider logic
  const gallery = document.getElementById('gallery');
  const slides = Array.from(gallery.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.gallery-nav.prev');
  const nextBtn = document.querySelector('.gallery-nav.next');
  const dotsWrap = document.getElementById('dots');

  let index = 0;
  const total = slides.length;

  // Create dots
  slides.forEach((s, i) => {
    const btn = document.createElement('button');
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(btn);
  });

  function update() {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      s.style.opacity = i === index ? '1' : '0.45';
      s.style.transform = i === index ? 'translateY(0)' : 'translateY(6px)';
    });
    // scroll slider so active slide is visible
    slides[index].scrollIntoView({behavior:'smooth', inline:'center'});
    // update dots
    Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + total) % total;
    update();
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  // Auto-advance
  let auto = setInterval(() => goTo(index + 1), 6000);
  [prevBtn, nextBtn, gallery].forEach(el => {
    el.addEventListener('mouseenter', () => clearInterval(auto));
    el.addEventListener('mouseleave', () => auto = setInterval(() => goTo(index + 1), 6000));
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.fade-in, .split-text, .gallery, .contact-card, .map-preview');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  revealEls.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Parallax for elements with data-speed
  const parallaxEls = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed') || 0.2);
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }, {passive:true});

  // Remove loading class for entrance animation
  setTimeout(() => document.body.classList.remove('loading'), 300);

  // Accessibility: keyboard gallery navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goTo(index + 1);
    if (e.key === 'ArrowLeft') goTo(index - 1);
  });

  // Performance: lazy-load gallery images
  const imgs = document.querySelectorAll('.gallery img, .split-media img, .hero-img, .map-preview img');
  imgs.forEach(img => {
    img.loading = 'lazy';
  });

});
