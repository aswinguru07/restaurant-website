/* ============================================================
   SAVORIA RESTAURANT — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Populate restaurant info ──────────────────────── */
  document.getElementById('restaurant-name').textContent    = RESTAURANT_INFO.name;
  document.getElementById('restaurant-tagline').textContent = RESTAURANT_INFO.tagline;
  document.getElementById('hero-description').textContent   = RESTAURANT_INFO.description;
  document.getElementById('footer-name').textContent        = RESTAURANT_INFO.name;
  document.getElementById('contact-phone').textContent      = RESTAURANT_INFO.phone;
  document.getElementById('contact-phone').href             = `tel:${RESTAURANT_INFO.phone.replace(/\s/g,'')}`;
  document.getElementById('contact-address').textContent    = RESTAURANT_INFO.address;
  document.getElementById('contact-hours-weekdays').textContent = RESTAURANT_INFO.hours.weekdays;
  document.getElementById('contact-hours-weekend').textContent  = RESTAURANT_INFO.hours.weekend;
  document.getElementById('map-iframe').src = RESTAURANT_INFO.mapEmbedUrl;
  document.title = `${RESTAURANT_INFO.name} — ${RESTAURANT_INFO.tagline}`;

  /* Set all WhatsApp links */
  const waMsg = encodeURIComponent(`Hi ${RESTAURANT_INFO.name}! I would like to place an order 🍽️`);
  const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${waMsg}`;
  document.querySelectorAll('.wa-link').forEach(el => el.href = waUrl);

  /* ── 2. Build Menu ────────────────────────────────────── */
  const menuGrid = document.getElementById('menu-grid');
  const categories = Object.keys(MENU);
  let activeCategory = categories[0];

  function renderMenu(category) {
    activeCategory = category;
    const data = MENU[category];
    menuGrid.innerHTML = '';
    data.items.forEach(item => {
      const wa = encodeURIComponent(`Hi ${RESTAURANT_INFO.name}! I'd like to order: ${item.name} (${item.price})`);
      const waItemUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${wa}`;
      const card = document.createElement('div');
      card.className = 'menu-card reveal';
      card.innerHTML = `
        <div class="menu-card-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <span class="menu-item-name">${item.name}</span>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.description}</p>
          <a href="${waItemUrl}" target="_blank" rel="noopener" class="menu-order-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Order This
          </a>
        </div>`;
      menuGrid.appendChild(card);
    });
    /* Trigger reveal after render */
    requestAnimationFrame(() => {
      menuGrid.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible');
      });
    });
  }

  /* Build tabs */
  const tabsContainer = document.getElementById('menu-tabs');
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'menu-tab';
    btn.dataset.cat = cat;
    btn.innerHTML = `${MENU[cat].icon} ${MENU[cat].label}`;
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(cat);
    });
    if (cat === categories[0]) btn.classList.add('active');
    tabsContainer.appendChild(btn);
  });
  renderMenu(activeCategory);

  /* ── 3. Navbar scroll effect ──────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('back-top').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* ── 4. Mobile nav ────────────────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobile-nav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── 5. Active nav link on scroll ────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));

  /* ── 6. Reveal on scroll ──────────────────────────────── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeReveal() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
  }
  observeReveal();
  // Re-observe after menu re-renders
  const menuObserver = new MutationObserver(observeReveal);
  menuObserver.observe(menuGrid, { childList: true });

  /* ── 7. Gallery Lightbox ──────────────────────────────── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.parentElement.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ── 8. Back to top ───────────────────────────────────── */
  document.getElementById('back-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── 9. Animate hero content on load ─────────────────── */
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
  });
});
