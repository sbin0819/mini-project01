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

### ref

[frontendmasters](https://hendrixer.github.io/nextjs-course/)
