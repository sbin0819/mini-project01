import React from 'react';
import Router, { withRouter } from 'next/router';

function BookDetail({ router: { query } }) {
  const books = JSON.parse(query.books);
  return (
    <div>
      <h1>book degail</h1>
      <h3>{books[0].author}</h3>
    </div>
  );
}

export default withRouter(BookDetail);
