import { List } from 'react-virtualized';
import { ListContainer } from './styles';
import InfiniteItems from './InfiniteItems';

const makeFakeData100 = () => {
  const result = [];
  for (let i = 0; i < 100; i++) {
    const data = {
      id: `id${i + 1}`,
      title: `title ${i + 1}`,
      content: `content ${i + 1}`,
      image: `image ${i + 1}`,
    };
    result.push(data);
  }
  return result;
};

function InifiniteList() {
  const dataList = makeFakeData100();
  const renderRow = () => dataList.map(item => <InfiniteItems key={item.id} item={item} />);
  return (
    <div>
      <h1>Tweet2 - virtualized</h1>
      <ListContainer className="list">
        <List
          width={800}
          height={400}
          rowHeight={50}
          rowRenderer={renderRow}
          rowCount={dataList.length}
        />
      </ListContainer>
    </div>
  );
}

export default InifiniteList;
