import { Table, message } from 'antd';

function DataList({ data }) {
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
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} rowKey={record => record.list_id} />
    </div>
  );
}

export default DataList;
