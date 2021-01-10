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
        <>
          {items.map((item, index) => (
            <div
              key={index}
              style={{ width: '500px', border: '1px solid black', cursor: 'pointer' }}
            >
              <label>{item.section}</label>
              <span>{item.title}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default SwrComponent;
