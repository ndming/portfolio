// ─── Gallery landing page builder ──────────────────────────────────────────
// Reads PROJECTS and renders clickable project cards into #gallery-list.

(function () {
  const list = document.getElementById('gallery-list')

  PROJECTS.forEach(proj => {
    const card = document.createElement('a')
    card.className = 'project-card'
    card.href = `/${proj.id}.html`
    card.innerHTML = `
      <div class="card-info">
        <span class="card-number">${proj.number}</span>
        <div class="card-meta">
          <h2 class="card-name">${proj.name}</h2>
          <p class="card-sub">${proj.subtitle}</p>
          <span class="card-year">${proj.year}</span>
        </div>
        <span class="card-cta">View Project →</span>
      </div>
      <div class="card-cover">
        <img
          src="${proj.cover}"
          alt="${proj.name}"
          style="object-position: ${proj.coverPos || 'center'}"
          loading="eager"
        >
      </div>
    `
    list.appendChild(card)
  })

  // Stagger cards in with GSAP after they're in the DOM
  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, stagger: 0.14, duration: 0.9, ease: 'power2.out', delay: 0.3 }
    )
    gsap.fromTo('.gallery-header',
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
    )
  }
})()
