import { withRouter } from 'next/router';

const Detail = ({ router: { query } }) => {
  const item = JSON.parse(query.item);

  return (
    <div>
      <h1>Title: {item.title}</h1>
      <p>{item.abstract}</p>
    </div>
  );
};
export default withRouter(Detail);
