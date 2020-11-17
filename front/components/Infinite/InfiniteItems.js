function InfiniteItems({ item }) {
  return (
    <div className="row">
      <div className="image">
        <img src="https://via.placeholder.com/25" alt="" />
      </div>
      <div className="content">
        <div>{item.name}</div>
        <div>{item.text}</div>
      </div>
    </div>
  );
}

export default InfiniteItems;
