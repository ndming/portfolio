gsap.registerPlugin(ScrollTrigger)

// ── Set hero element initial states synchronously so there's no FOUC ──
gsap.set('.kw, .kw-sep', { opacity: 0, y: -14 })
gsap.set('.hero-title img', { opacity: 0, y: 56, clipPath: 'inset(0 0 100% 0)' })
gsap.set('.hero-label img', { opacity: 0, x: -22 })
gsap.set('.hero-photo-img', { opacity: 0, scale: 1.06 })

// ── Hero entrance (on load) ────────────────────────────────────────────
const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } })

heroTl
  .to('.hero-photo-img', { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }, 0)
  .to('.kw, .kw-sep',   { opacity: 1, y: 0, stagger: 0.09, duration: 0.65 }, 0.15)
  .to('.hero-title img', {
    opacity: 1, y: 0,
    clipPath: 'inset(0 0 0% 0)',
    duration: 1.1, ease: 'power3.out'
  }, 0.5)
  .to('.hero-label img', { opacity: 1, x: 0, duration: 0.75 }, 0.9)

// ── Generic scroll-reveal for light sections ───────────────────────────
ScrollTrigger.batch('.reveal', {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.11,
    duration: 0.88,
    ease: 'power2.out',
  }),
  start: 'top 88%',
  once: true,
})

// ── Dark section: parallax + namecard reveal ───────────────────────────

// Parallax scroll on the background image
gsap.to('.dark-bg img', {
  yPercent: -22,
  ease: 'none',
  scrollTrigger: {
    trigger: '.s-dark',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
})

// Namecard fade-slide in
ScrollTrigger.batch('.reveal-dark', {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    duration: 1.15,
    ease: 'power2.out',
    stagger: 0.14,
  }),
  start: 'top 72%',
  once: true,
})

// Subtle section-level fade as dark section enters
gsap.fromTo('.s-dark',
  { opacity: 0.4 },
  {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.s-dark',
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  }
)

// ── Hero: shop text parallax (counter-scrolls like pkg-center-title) ──────
// gsap.to('.hero-shop-wrap', {
//   y: -48,
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.hero-row-b',
//     start: 'top bottom',
//     end: 'bottom top',
//     scrub: 0.9,
//   },
// })

// ── Packaging: packaging title gentle parallax ─────────────────────────
gsap.to('.pkg-center-title', {
  y: -48,
  ease: 'none',
  scrollTrigger: {
    trigger: '.pkg-main',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.9,
  },
})

// ── Merch: header fade in ──────────────────────────────────────────────
gsap.fromTo('.merch-header',
  { opacity: 0, y: 14 },
  {
    opacity: 0.55,
    y: 0,
    duration: 0.75,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.s-merch',
      start: 'top 82%',
    },
  }
)

// ── Posters: slide-up entrance ─────────────────────────────────────────
gsap.fromTo('.posters-main img',
  { y: 72, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.05,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.posters-main',
      start: 'top 85%',
    },
  }
)

// ── Lifestyle photo subtle parallax (packaging section) ────────────────
gsap.utils.toArray('.pkg-lifestyle > div img').forEach(img => {
  gsap.to(img, {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: img,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
