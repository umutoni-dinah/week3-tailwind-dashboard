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
  <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
    <div>
      <p class="text-sm text-forest/70">Your shelves are in good hands</p>
      <h1 class="mt-1 font-display text-3xl font-semibold text-forest sm:text-4xl">
        Welcome back, Dee
      </h1>
      <p class="mt-2 text-sm text-ink/70">
        Every order sends a new story out into the world.
      </p>
    </div>

    <div class="flex items-center gap-3">
      <label class="relative min-w-0 flex-1 md:w-72 md:flex-none">
        <span class="sr-only">Search books, orders, or readers</span>
        <span aria-hidden="true" class="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-forest/60">⌕</span>
        <input
          type="search"
          placeholder="Search the shelves..."
          class="w-full rounded-full border border-forest/15 bg-white/80 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-ink/45 focus:border-sage focus:ring-2 focus:ring-sage/30"
        />
      </label>

      <button
        type="button"
        aria-label="Dee's profile"
        class="flex shrink-0 items-center gap-2 rounded-full border border-forest/10 bg-white/70 p-1 pr-3 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sage"
      >
        <span class="grid size-10 place-items-center rounded-full bg-lavender font-display font-semibold text-forest">D</span>
        <span class="hidden text-sm font-medium text-forest sm:inline">Dee</span>
      </button>
    </div>
  </div>
</header> 

      <section class="px-5 py-8 sm:px-8 lg:px-10">
  <div>
    <p class="text-sm font-medium uppercase tracking-[0.16em] text-forest/60">
      At a glance
    </p>
    <h2 class="mt-1 font-display text-2xl font-semibold text-forest">
      The shop, in stories and numbers
    </h2>
    <p class="mt-1 text-sm text-ink/65">
      A small snapshot of the worlds moving through your shelves.
    </p>
  </div>

  <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
    <article class="rounded-2xl border border-forest/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Books in stock</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-sage/20 text-lg text-forest">▤</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">1,248</p>
      <p class="mt-2 text-sm text-forest">↑ 8.4% <span class="text-ink/55">since last month</span></p>
    </article>

    <article class="rounded-2xl border border-forest/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Orders this week</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-lavender/40 text-lg text-forest">◷</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">186</p>
      <p class="mt-2 text-sm text-forest">↑ 12 new <span class="text-ink/55">since yesterday</span></p>
    </article>

    <article class="rounded-2xl border border-forest/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Monthly revenue</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-sage/20 text-lg text-forest">↗</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">RWF 48,260</p>
      <p class="mt-2 text-sm text-forest">↑ 6.2% <span class="text-ink/55">since last month</span></p>
    </article>

    <article class="rounded-2xl border border-forest/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Returning readers</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-lavender/40 text-lg text-forest">♡</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">68%</p>
      <p class="mt-2 text-sm text-forest">↑ 4.1% <span class="text-ink/55">reader loyalty</span></p>
    </article>
  </div>
</section>
    </main>
  </div>
`