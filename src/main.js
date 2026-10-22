import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-paper text-ink font-sans lg:grid lg:grid-cols-[250px_1fr]">
    <aside class="hidden bg-forest px-6 py-8 text-paper lg:flex lg:flex-col">
      <a href="#" class="font-display text-2xl font-semibold tracking-wide">
        DEE'S <span class="text-lavender">BOOKHUB</span>
      </a>
      <p class="mt-2 text-sm text-paper/70">A little world between the pages.</p>

      <nav aria-label="Main navigation" class="mt-12 space-y-2">
        <a href="#" class="flex items-center gap-3 rounded-xl bg-paper/15 px-4 py-3 text-sm font-medium transition hover:bg-paper/20 focus:outline-none focus:ring-2 focus:ring-lavender">
          <span aria-hidden="true">⌂</span> Overview
        </a>
        <a href="#" class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-paper/75 transition hover:bg-paper/10 hover:text-paper focus:outline-none focus:ring-2 focus:ring-lavender">
          <span aria-hidden="true">▤</span> Books
        </a>
        <a href="#" class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-paper/75 transition hover:bg-paper/10 hover:text-paper focus:outline-none focus:ring-2 focus:ring-lavender">
          <span aria-hidden="true">▣</span> Orders
        </a>
        <a href="#" class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-paper/75 transition hover:bg-paper/10 hover:text-paper focus:outline-none focus:ring-2 focus:ring-lavender">
          <span aria-hidden="true">♡</span> Readers
        </a>
        <a href="#" class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-paper/75 transition hover:bg-paper/10 hover:text-paper focus:outline-none focus:ring-2 focus:ring-lavender">
          <span aria-hidden="true">◷</span> Reports
        </a>
      </nav>

      <p class="mt-auto border-t border-paper/15 pt-6 font-display text-lg italic text-lavender">
        “A book is a door you can carry.”
      </p>
    </aside>

    <main class="min-w-0">
      <header class="border-b border-forest/10 px-5 py-6 sm:px-8 lg:px-10">
        <p class="text-sm text-forest/70">Your shelves are in good hands</p>
        <h1 class="mt-1 font-display text-3xl font-semibold text-forest sm:text-4xl">
          Welcome back, Dee
        </h1>
        <p class="mt-2 text-sm text-ink/70">
          Every order sends a new story out into the world.
        </p>
      </header>

      <section class="px-5 py-8 sm:px-8 lg:px-10">
        <p class="font-display text-xl italic text-forest">
          Your bookshop dashboard will grow here, one page at a time.
        </p>
      </section>
    </main>
  </div>
`