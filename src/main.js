import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-paper text-ink font-sans lg:grid lg:grid-cols-[250px_1fr]">
    <aside id="sidebar" class="hidden bg-forest px-6 py-8 text-paper lg:flex lg:flex-col">
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
     <button
  id="menu-toggle"
  type="button"
  aria-controls="sidebar"
  aria-expanded="false"
  aria-label="Open navigation"
  class="mb-4 grid size-10 place-items-center rounded-full border border-forest/15 text-forest transition hover:bg-sage/10 focus:outline-none focus:ring-2 focus:ring-sage lg:hidden"
>
  <span aria-hidden="true">☰</span>
</button>
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
    <article class="card p-5">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Books in stock</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-sage/20 text-lg text-forest">▤</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">1,248</p>
      <p class="mt-2 text-sm text-forest">↑ 8.4% <span class="text-ink/55">since last month</span></p>
    </article>

    <article class="card p-5">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Orders this week</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-lavender/40 text-lg text-forest">◷</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">186</p>
      <p class="mt-2 text-sm text-forest">↑ 12 new <span class="text-ink/55">since yesterday</span></p>
    </article>

    <article class="card p-5">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Monthly revenue</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-sage/20 text-lg text-forest">↗</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">RWF 48,260</p>
      <p class="mt-2 text-sm text-forest">↑ 6.2% <span class="text-ink/55">since last month</span></p>
    </article>

    <article class="card p-5">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-ink/65">Returning readers</p>
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-xl bg-lavender/40 text-lg text-forest">♡</span>
      </div>
      <p class="mt-5 font-display text-3xl font-semibold text-forest">68%</p>
      <p class="mt-2 text-sm text-forest">↑ 4.1% <span class="text-ink/55">reader loyalty</span></p>
    </article>
  </div>
</section>
<section aria-labelledby="orders-heading" class="mt-8 px-5 pb-10 sm:px-8 lg:px-10">
  <div class="flex flex-wrap items-end justify-between gap-3">
    <div>
      <p class="text-sm font-medium uppercase tracking-[0.16em] text-forest/60">Fresh from the shelves</p>
      <h2 id="orders-heading" class="mt-1 font-display text-2xl font-semibold text-forest">Recent orders</h2>
      <p class="mt-1 text-sm text-ink/65">A few stories finding their way to new homes.</p>
    </div>
    <a href="#" class="rounded-full px-4 py-2 text-sm font-medium text-forest transition hover:bg-sage/15 focus:outline-none focus:ring-2 focus:ring-sage">
      View all orders →
    </a>
  </div>

  <div class="mt-5 overflow-hidden rounded-2xl border border-forest/10 bg-white/80 shadow-sm">
    <div class="overflow-x-auto">
      <table class="w-full min-w-[760px] text-left text-sm">
        <thead class="bg-forest/5 text-xs uppercase tracking-wider text-ink/60">
          <tr>
            <th scope="col" class="px-5 py-4">Order</th>
            <th scope="col" class="px-5 py-4">Book</th>
            <th scope="col" class="px-5 py-4">Reader</th>
            <th scope="col" class="px-5 py-4">Date</th>
            <th scope="col" class="px-5 py-4">Amount</th>
            <th scope="col" class="px-5 py-4">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-forest/10 text-ink">
          <tr class="transition hover:bg-paper/70">
            <td class="whitespace-nowrap px-5 py-4 font-medium text-forest">#BK-2048</td>
            <td class="px-5 py-4">The Midnight Library</td>
            <td class="px-5 py-4">Nia M.</td>
            <td class="whitespace-nowrap px-5 py-4">22 Oct</td>
            <td class="whitespace-nowrap px-5 py-4">RWF 28,900</td>
            <td class="px-5 py-4"><span class="badge bg-emerald-100 text-emerald-800">Paid</span></td>
badge bg-amber-100 text-amber-800         </tr>
          <tr class="transition hover:bg-paper/70">
            <td class="whitespace-nowrap px-5 py-4 font-medium text-forest">#BK-2047</td>
            <td class="px-5 py-4">The House in the Cerulean Sea</td>
            <td class="px-5 py-4">Alex P.</td>
            <td class="whitespace-nowrap px-5 py-4">22 Oct</td>
            <td class="whitespace-nowrap px-5 py-4">RWF 19,000</td>
            <td class="px-5 py-4"><span class="badge bg-amber-100 text-amber-800">Pending</span></td>
          </tr>
          <tr class="transition hover:bg-paper/70">
            <td class="whitespace-nowrap px-5 py-4 font-medium text-forest">#BK-2046</td>
            <td class="px-5 py-4">Small Things Like These</td>
            <td class="px-5 py-4">Sam K.</td>
            <td class="whitespace-nowrap px-5 py-4">21 Oct</td>
            <td class="whitespace-nowrap px-5 py-4">RWF 17,000</td>
            <td class="px-5 py-4"><span class="badge bg-emerald-100 text-emerald-800">Paid</span></td>
          </tr>
          <tr class="transition hover:bg-paper/70">
            <td class="whitespace-nowrap px-5 py-4 font-medium text-forest">#BK-2045</td>
            <td class="px-5 py-4">The Song of Achilles</td>
            <td class="px-5 py-4">Priya D.</td>
            <td class="whitespace-nowrap px-5 py-4">21 Oct</td>
            <td class="whitespace-nowrap px-5 py-4">RWF  25,000</td>
            <td class="px-5 py-4"><span class="badge bg-rose-100 text-rose-800">Failed</span></td>
          </tr>
          <tr class="transition hover:bg-paper/70">
            <td class="whitespace-nowrap px-5 py-4 font-medium text-forest">#BK-2044</td>
            <td class="px-5 py-4">Braiding Sweetgrass</td>
            <td class="px-5 py-4">Lindi N.</td>
            <td class="whitespace-nowrap px-5 py-4">20 Oct</td>
            <td class="whitespace-nowrap px-5 py-4">RWF 12,000</td>
            <td class="px-5 py-4"><span class="badge bg-emerald-100 text-emerald-800">Paid</span></td>
          </tr>
          <tr class="transition hover:bg-paper/70">
            <td class="whitespace-nowrap px-5 py-4 font-medium text-forest">#BK-2043</td>
            <td class="px-5 py-4">Atomic Habits</td>
            <td class="px-5 py-4">James Clear</td>
            <td class="whitespace-nowrap px-5 py-4">20 Oct</td>
            <td class="whitespace-nowrap px-5 py-4">RWF 22,265</td>
            <td class="px-5 py-4"><span class="badge bg-amber-100 text-amber-800">Pending</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section class="grid grid-cols-1 gap-5 px-5 pb-10 sm:px-8 lg:px-10 xl:grid-cols-2">
  <article class="card p-5 sm:p-6">
    <div>
      <p class="text-sm font-medium uppercase tracking-[0.16em] text-forest/60">Little moments</p>
      <h2 class="mt-1 font-display text-2xl font-semibold text-forest">Recent activity</h2>
      <p class="mt-1 text-sm text-ink/65">New stories finding their readers.</p>
    </div>

    <ul class="mt-5 divide-y divide-forest/10">
      <li class="flex gap-3 py-4">
        <span aria-hidden="true" class="grid size-10 shrink-0 place-items-center rounded-full bg-sage/20 text-forest">✦</span>
        <div class="min-w-0 flex-1">
          <p class="text-sm text-ink"><span class="font-semibold text-forest">Nia M.</span> ordered <span class="font-medium">The Midnight Library</span></p>
          <p class="mt-1 text-xs text-ink/55">A new story begins · 10:42 AM</p>
        </div>
      </li>
      <li class="flex gap-3 py-4">
        <span aria-hidden="true" class="grid size-10 shrink-0 place-items-center rounded-full bg-lavender/40 text-forest">♡</span>
        <div class="min-w-0 flex-1">
          <p class="text-sm text-ink"><span class="font-semibold text-forest">Alex P.</span> joined the reader circle</p>
          <p class="mt-1 text-xs text-ink/55">A new reader at the door · 9:18 AM</p>
        </div>
      </li>
      <li class="flex gap-3 py-4">
        <span aria-hidden="true" class="grid size-10 shrink-0 place-items-center rounded-full bg-sage/20 text-forest">↗</span>
        <div class="min-w-0 flex-1">
          <p class="text-sm text-ink"><span class="font-semibold text-forest">Braiding Sweetgrass</span> is having a moment</p>
          <p class="mt-1 text-xs text-ink/55">12 copies found new homes · Yesterday</p>
        </div>
      </li>
      <li class="flex gap-3 py-4">
        <span aria-hidden="true" class="grid size-10 shrink-0 place-items-center rounded-full bg-lavender/40 text-forest">✉</span>
        <div class="min-w-0 flex-1">
          <p class="text-sm text-ink">A kind note arrived from <span class="font-semibold text-forest">Sam K.</span></p>
          <p class="mt-1 text-xs text-ink/55">“It felt like a hug in paper form.” · Yesterday</p>
        </div>
      </li>
    </ul>
  </article>

  <article class="card p-5 sm:p-6">
    <div>
      <p class="text-sm font-medium uppercase tracking-[0.16em] text-forest/60">Readers keep reaching for</p>
      <h2 class="mt-1 font-display text-2xl font-semibold text-forest">Bestselling books</h2>
      <p class="mt-1 text-sm text-ink/65">The stories travelling furthest this week.</p>
    </div>

    <ul class="mt-6 space-y-5">
      <li>
        <div class="mb-2 flex items-center justify-between gap-3">
          <div class="flex min-w-0 items-center gap-3">
            <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-sage/20 text-sm font-semibold text-forest">1</span>
            <span class="truncate text-sm font-medium text-forest">The Midnight Library</span>
          </div>
          <span class="shrink-0 text-xs text-ink/55">82 sold</span>
        </div>
        <div role="progressbar" aria-label="The Midnight Library sales" aria-valuemin="0" aria-valuemax="100" aria-valuenow="82" class="h-2 overflow-hidden rounded-full bg-forest/10">
          <div class="h-full w-[82%] rounded-full bg-sage"></div>
        </div>
      </li>
      <li>
        <div class="mb-2 flex items-center justify-between gap-3">
          <div class="flex min-w-0 items-center gap-3">
            <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-lavender/40 text-sm font-semibold text-forest">2</span>
            <span class="truncate text-sm font-medium text-forest">The Book Thief</span>
          </div>
          <span class="shrink-0 text-xs text-ink/55">68 sold</span>
        </div>
        <div role="progressbar" aria-label="The Book Thief sales" aria-valuemin="0" aria-valuemax="100" aria-valuenow="68" class="h-2 overflow-hidden rounded-full bg-forest/10">
          <div class="h-full w-[68%] rounded-full bg-lavender"></div>
        </div>
      </li>
      <li>
        <div class="mb-2 flex items-center justify-between gap-3">
          <div class="flex min-w-0 items-center gap-3">
            <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-sage/20 text-sm font-semibold text-forest">3</span>
            <span class="truncate text-sm font-medium text-forest">Small Things Like These</span>
          </div>
          <span class="shrink-0 text-xs text-ink/55">54 sold</span>
        </div>
        <div role="progressbar" aria-label="Small Things Like These sales" aria-valuemin="0" aria-valuemax="100" aria-valuenow="54" class="h-2 overflow-hidden rounded-full bg-forest/10">
          <div class="h-full w-[54%] rounded-full bg-sage"></div>
        </div>
      </li>
      <li>
        <div class="mb-2 flex items-center justify-between gap-3">
          <div class="flex min-w-0 items-center gap-3">
            <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-lavender/40 text-sm font-semibold text-forest">4</span>
            <span class="truncate text-sm font-medium text-forest">The House in the Cerulean Sea</span>
          </div>
          <span class="shrink-0 text-xs text-ink/55">41 sold</span>
        </div>
        <div role="progressbar" aria-label="The House in the Cerulean Sea sales" aria-valuemin="0" aria-valuemax="100" aria-valuenow="41" class="h-2 overflow-hidden rounded-full bg-forest/10">
          <div class="h-full w-[41%] rounded-full bg-lavender"></div>
        </div>
      </li>
    </ul>
  </article>
</section>
<section aria-labelledby="add-book-heading" class="px-5 pb-12 sm:px-8 lg:px-10">
  <div class="card p-5 sm:p-7">
    <div class="mb-6">
      <p class="text-sm font-medium uppercase tracking-[0.16em] text-forest/60">Make room for another story</p>
      <h2 id="add-book-heading" class="mt-1 font-display text-2xl font-semibold text-forest">Add a book</h2>
      <p class="mt-1 text-sm text-ink/65">Every new title opens a door for a reader.</p>
    </div>

    <form class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div class="sm:col-span-2">
        <label for="book-title" class="mb-2 block text-sm font-medium text-forest">Book title</label>
        <input id="book-title" name="title" type="text" placeholder="e.g. The Midnight Library" required
          class="w-full rounded-xl border border-forest/15 bg-paper/60 px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-sage focus:ring-2 focus:ring-sage/30" />
      </div>

      <div>
        <label for="book-author" class="mb-2 block text-sm font-medium text-forest">Author</label>
        <input id="book-author" name="author" type="text" placeholder="Author's name" required
          class="w-full rounded-xl border border-forest/15 bg-paper/60 px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-sage focus:ring-2 focus:ring-sage/30" />
      </div>

      <div>
        <label for="book-category" class="mb-2 block text-sm font-medium text-forest">Category</label>
        <select id="book-category" name="category" required
          class="w-full rounded-xl border border-forest/15 bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/30">
          <option value="">Choose a shelf</option>
          <option>Fiction</option>
          <option>Poetry</option>
          <option>Biography</option>
          <option>Self-development</option>
          <option>Children's books</option>
        </select>
      </div>

      <div>
        <label for="book-price" class="mb-2 block text-sm font-medium text-forest">Price (RWF)</label>
        <input id="book-price" name="price" type="number" min="0" step="100" placeholder="25000" required
          class="w-full rounded-xl border border-forest/15 bg-paper/60 px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-sage focus:ring-2 focus:ring-sage/30" />
      </div>

      <div>
        <label for="book-stock" class="mb-2 block text-sm font-medium text-forest">Copies in stock</label>
        <input id="book-stock" name="stock" type="number" min="0" step="1" placeholder="24" required
          class="w-full rounded-xl border border-forest/15 bg-paper/60 px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-sage focus:ring-2 focus:ring-sage/30" />
      </div>

      <div class="flex flex-wrap gap-3 pt-1 sm:col-span-2">
        <button type="button"
          class="btn-primary">
          Add to the shelves
        </button>
        <button type="reset"
          class="rounded-full border border-forest/15 px-5 py-3 text-sm font-medium text-forest transition hover:bg-sage/10 focus:outline-none focus:ring-2 focus:ring-sage">
          Clear form
        </button>
      </div>
    </form>
  </div>
</section>
    </main>
  </div>
`;
const menuToggle = document.querySelector('#menu-toggle')
const sidebar = document.querySelector('#sidebar')

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'

  sidebar.classList.toggle('hidden')
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Open navigation' : 'Close navigation'
  )
  menuToggle.querySelector('span').textContent = isOpen ? '☰' : '×'
})
