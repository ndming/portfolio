// ─── Project Registry ──────────────────────────────────────────────────────
// To add a new project:
//   1. Drop its PDF and asset folder under assets/
//   2. Append one entry below
//   3. Create a matching <id>.html project page
//
// Convention: id must match the HTML filename and the assets directory name.
//   e.g.  id: 'bloom'  →  bloom.html  +  assets/bloom/

const PROJECTS = [
  {
    id:       'tanpo',
    number:   '01',
    name:     'Tanpo',
    subtitle: 'Coffee Shop Branding',
    year:     '2024',
    cover:    '/assets/tanpo/Cafe Cup 1.jpg',
    coverPos: 'center 35%',
  },
]
