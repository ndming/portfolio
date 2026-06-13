// ─── Shared project navigation ─────────────────────────────────────────────
// Auto-detects current project from the URL filename.
// Injects a fixed top bar with ← back, title, and prev/next arrows.
// Runs on every project page; does nothing on index.html.

(function () {
  const slug = location.pathname.split('/').pop().replace(/\.html$/, '')
  const idx  = PROJECTS.findIndex(p => p.id === slug)
  if (idx === -1) return   // not a project page

  const proj = PROJECTS[idx]
  const prev = PROJECTS[idx - 1]
  const next = PROJECTS[idx + 1]
  const total = String(PROJECTS.length).padStart(2, '0')

  const nav = document.createElement('nav')
  nav.className = 'site-nav'
  nav.innerHTML = `
    <a href="/" class="nav-back">← Portfolio</a>
    <span class="nav-title">${proj.number}. ${proj.name}</span>
    <div class="nav-pager">
      ${prev
        ? `<a href="/${prev.id}.html" class="nav-arrow" title="${prev.name}">←</a>`
        : `<span class="nav-arrow nav-arrow--off">←</span>`}
      <span class="nav-count">${proj.number} / ${total}</span>
      ${next
        ? `<a href="/${next.id}.html" class="nav-arrow" title="${next.name}">→</a>`
        : `<span class="nav-arrow nav-arrow--off">→</span>`}
    </div>
  `
  document.body.prepend(nav)
})()
