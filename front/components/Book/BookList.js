import Link from 'next/link';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';
import { Table, message, Button } from 'antd';

function BookList() {
  const router = useRouter();
  const { response, error, isLoading } = useFetch();
  if (isLoading) return <h1>loading....</h1>;
  if (error) {
    message('에러입니다');
  }
  const bookList = response?.lists;

  const columns = [
    {
      title: 'id',
      dataIndex: 'list_id',
    },
    {
      title: 'name',
      dataIndex: 'list_name',
    },
    {
      title: 'type',
      dataIndex: 'display_name',
    },
    {
      title: 'books',
      render: row => (
        <Button
          onClick={() => {
            router.push({
              pathname: `/book/${row.list_id}`,
              query: { books: JSON.stringify(row.books) },
            });
          }}
        >
          <a>total: {row.books.length}</a>
        </Button>
      ),
    },
    {
      title: 'books',
      render: row => (
        <Link
          href={{
            pathname: `/book/${row.list_id}`,
            query: { books: JSON.stringify(row.books) },
          }}
        >
          <a>total: {row.books.length}</a>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={bookList} columns={columns} rowKey={record => record.list_id} />
    </div>
  );
}

export default BookList;
