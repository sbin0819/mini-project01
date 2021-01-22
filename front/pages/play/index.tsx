import { useEffect, useState, useRef } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);
  useEffect(() => {
    latestCount.current = count;
    setTimeout(() => {
      console.log(latestCount.current);
    }, 1000);
  });
  return (
    <div>
      <h1>playground</h1>
      <p>you cliked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};
