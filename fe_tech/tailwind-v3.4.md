**1. Dynamic viewport units**
- dvh, lvh, and svh are designed to accommodate that disappearing browser chrome and Tailwind CSS v3.4 supports them out of the box.

**2. New :has() variant**
- You can style an element based on its children
```html
<label class="has-[:checked]:ring-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 ..">
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay
  <input type="radio" class="accent-indigo-500 ..." />
</label>
```


**3. Style children with the * variant**
- A way to style children from the parent using utility classes.
```html
<ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
    <li>Sales</li>
    <li>Marketing</li>
    <li>SEO</li>
    <!-- ... -->
  </ul>
```
Generally I’d recommend just styling the children directly, but this can be useful in some cases.

**4. New size-\* utilities**
In Tailwind CSS v3.4 we’ve finally added a new size-* utility that sets width and height at the same time.
```html
<img class="size-10" ...>
<img class="size-12" ...>
<img class="size-14" ...>
```

**5. Balanced headlines with text-wrap utilities**
- Handle line-break for responsive with `text-banlance`
```html
<article>
  <h3 class="text-balance ...">Beloved Manhattan soup stand closes<h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

**6. Subgrid support**
- Use subgrid is a easy way to place its child elements in the parent grid.
```html
<div class="grid grid-cols-4 gap-4">
  <!-- ... -->
  <div class="grid grid-cols-subgrid gap-4 col-span-3">
      <div class="col-start-2">06</div>
  </div>
  <!-- ... -->
</div>
```

**7. Extended min-width, max-width, and min-height scales**
```html
<div class="min-w-12">
  <!-- ... -->
</div>
```

**8. Extended opacity scale**
- Extended the opacity scale to include every step of 5.
```html
<div class="opacity-35">
  <!-- ... -->
</div>
```

**9. Extended grid-rows-* scale**
- We’ve also bumped the baked-in number of grid rows from 6 to 12 because why not:
```html
<div class="grid grid-rows-9">
  <!-- ... -->
</div>
```

**10. New forced-colors variant**
- `forced-colors` variant for adjusting styles for forced colors mode:
```html
<form>
  <input type="checkbox" class="appearance-none forced-colors:appearance-auto ...">
</form>
```

**11. New forced-color-adjust utilities**
More at: https://tailwindcss.com/blog/tailwindcss-v3-4#new-forced-color-adjust-utilities




