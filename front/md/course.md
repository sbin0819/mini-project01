## Introduction

full stack frame work

## Routing

### Folders and routes

```
pages
  notes
    index.jsx
```

### Dynamic routes

```
pages
  notes
    index.jsx
    [id].jsx
```

```
import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <h1>Note: {id} </h1>
  )
}

```

### Catch-all routes

```
import React from 'react'
import { useRouter } from 'next/router'

// file => /docs/[...params].jsx
// route => /docs/a/b/c

export default () => {
  const router = useRouter()
  const { params }= router.query

  // params === ['a', 'b', 'c']

  return (
    <h1>hello</h1>
  )
}
```

### Navigation

#### Link component

```
...
import Link from 'router/link';

...
<Link href='/'>
    <a>link</a>
</Link>
...
```

#### Programmatic routing

https://nextjs.org/docs/routing/introduction

### Config

#### Adding CSS & Modules

pages/\_app.jsx

```
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

#### Theme UI

```
/** @jsxRuntime classic */
/** @jsx jsx */
```

### Customizing Next.js config

#### Config

next-config.js

ref
https://hendrixer.github.io/nextjs-course/config
https://github.com/vercel/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4

#### Plugins

### API

#### API Routes

All we have to do is create an api folder in our pages director. The file names and paths work just like pages do. However, instead of building components in those files, we'll create API handlers.

### Pre-rendering and Data Fetching

#### When to use what

Do you need data at runtime but don't need SSR? Use client-side data fetching.

Do you need data at runtime but do need SSR? Use getServerSideProps

Do you have pages that rely on data that is cachable and accessible at build time? Like from a CMS? Use getStaticProps

Do you have the same as above but the pages have dynamic URL params? Use getStaticProps and getStaticPaths

#### Rendering Modes

Next.js looks at the data fetching in your page components to determine how and when to prerender your page. Here are the different modes:

Static Generation Pages built at build time into HTML. CDN cacheable.

Server-side Rendering Pages built at run time into HTML. Cached after the initial hit.

Client-side Rendering Single-page app

By default, all pages are prerendered, even if they don't export a data fetching method. You choose the prerendering method (static or SSR) by what data function you export in your page component.

For client-side rendering, fetch your data inside your components. You can mix and match these rendering modes to have a genuinely hybrid app ✨.

### ref

[frontendmasters](https://hendrixer.github.io/nextjs-course/)
