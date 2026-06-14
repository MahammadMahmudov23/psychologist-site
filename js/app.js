/* [Name], Psychologist — site behaviour */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ① REPLACE contact details */
  const WA = '994000000000';            // WhatsApp number, digits only
  const EMAIL = 'hello@example.az';     // fallback email

  /* Lenis smooth scroll (gentle) */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.3, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), wheelMultiplier: 0.92 });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    if (window.ScrollTrigger) lenis.on('scroll', ScrollTrigger.update);
  }

  const nav = $('#nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const burger = $('.burger'), mMenu = $('.m-menu');
  if (burger && mMenu) {
    const toggle = (open) => {
      mMenu.classList.toggle('open', open); burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    burger.addEventListener('click', () => toggle(!mMenu.classList.contains('open')));
    $$('a', mMenu).forEach(a => a.addEventListener('click', () => toggle(false)));
  }

  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href'); if (id.length < 2) return;
    const t = $(id); if (!t) return; e.preventDefault();
    if (lenis) lenis.scrollTo(t, { offset: -70, duration: 1.3 });
    else t.scrollIntoView({ behavior: 'smooth' });
  }));

  const io = new IntersectionObserver((ents) => {
    ents.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('.rv, .rv-l, .rv-r, [data-stagger]').forEach(el => io.observe(el));

  const cio = new IntersectionObserver((ents) => {
    ents.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, to = parseFloat(el.dataset.count), suf = el.dataset.suffix || '';
      if (reduce) { el.textContent = to + suf; cio.unobserve(el); return; }
      const dur = 1600, t0 = performance.now();
      const tick = (t) => { const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(to * e) + suf; if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick); cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach(el => cio.observe(el));

  $$('.qa').forEach(qa => {
    const btn = $('button', qa), ans = $('.ans', qa);
    btn.addEventListener('click', () => {
      const open = qa.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
    });
  });

  const modal = $('#article-modal');
  if (modal) {
    const open = () => { modal.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const close = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
    $$('[data-open-article]').forEach(b => b.addEventListener('click', open));
    $$('[data-close]', modal).forEach(b => b.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  const form = $('#booking-form'), done = $('#booking-done');
  if (form) {
    const fail = (el, m) => { el.classList.add('bad'); const e = el.parentElement.querySelector('.err'); if (e) { e.textContent = m; e.classList.add('show'); } };
    const clear = (el) => { el.classList.remove('bad'); const e = el.parentElement.querySelector('.err'); if (e) e.classList.remove('show'); };
    $$('input,select,textarea', form).forEach(el => el.addEventListener('input', () => clear(el)));
    const dateEl = $('#b-date', form);
    if (dateEl) { const d = new Date(); dateEl.min = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }

    form.addEventListener('submit', e => {
      e.preventDefault();
      let ok = true;
      const name = $('#b-name'), phone = $('#b-phone'), email = $('#b-email'),
            svc = $('#b-service'), date = $('#b-date'), time = $('#b-time'), msg = $('#b-msg');
      if (!name.value.trim()) { fail(name, 'Please enter your name'); ok = false; }
      if (!/^[\d\s+\-()]{7,20}$/.test(phone.value.trim())) { fail(phone, 'Enter a valid phone number'); ok = false; }
      if (email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) { fail(email, 'Enter a valid email'); ok = false; }
      if (!svc.value) { fail(svc, 'Please choose a session type'); ok = false; }
      if (!date.value) { fail(date, 'Choose a date'); ok = false; }
      if (!ok) return;

      const dStr = new Date(date.value + 'T00:00:00').toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
      const lines = [
        'New session request',
        `Name: ${name.value.trim()}`,
        `Phone: ${phone.value.trim()}`,
        email.value ? `Email: ${email.value.trim()}` : '',
        `Session type: ${svc.value}`,
        `Preferred date: ${dStr}`,
        time.value ? `Preferred time: ${time.value}` : '',
        msg.value.trim() ? `Message: ${msg.value.trim()}` : '',
      ].filter(Boolean).join('\n');

      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines)}`, '_blank', 'noopener');
      const mail = `mailto:${EMAIL}?subject=${encodeURIComponent('Session request')}&body=${encodeURIComponent(lines)}`;
      form.style.display = 'none';
      if (done) { const ml = $('#done-mail', done); if (ml) ml.href = mail; done.classList.add('show'); }
    });
    const reset = $('#booking-reset');
    if (reset) reset.addEventListener('click', () => { form.reset(); form.style.display = ''; if (done) done.classList.remove('show'); });
  }

  const wa = $('.wa-float'); if (wa) setTimeout(() => wa.classList.add('in'), 1400);
})();
