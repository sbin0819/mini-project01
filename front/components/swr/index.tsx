import Link from 'next/link';
import useSWR from 'swr';
import { NYT_API } from '../../.env.js';

function SwrComponent() {
  const { data, error, mutate } = useSWR(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${NYT_API}`,
    url => {
      return fetch(url).then(res => res.json());
    },
  );

  const items = data?.results;
  return (
    <div>
      <h1>useSWR </h1>
      {data && (
        <div style={{ width: '600px', overflow: 'hidden' }}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid black',

                cursor: 'pointer',
              }}
            >
              <label style={{ fontWeight: 'bold', marginRight: '15px' }}>({item.section})</label>
              <Link
                href={{ pathname: '/swr/[id]', query: { item: JSON.stringify(item) } }}
                as={`/swr/${index}`}
              >
                <a>{item.title}</a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SwrComponent;
