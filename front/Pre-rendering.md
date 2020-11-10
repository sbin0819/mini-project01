**When to Use Static Generation v.s. Server-side Rendering**

Static Generation

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

Server-side Rendering

- When the data needs to be up-to-date with every request

# Static Generation with Data using `getStaticProps`

```javascript
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

## getStaticProps Details

### Fetch External API or Query Database

```javascript
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  return res.json();
}
```

you can also query the database directly

```javascript
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
```

This is possible because getStaticProps runs only on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

### Development vs. Production

- In development (npm run dev or yarn dev), getStaticProps runs on every request.
- In production, getStaticProps runs at build time.

### Only Allowed in a Page

getStaticProps can only be exported from a page. You can’t export it from non-page files.
