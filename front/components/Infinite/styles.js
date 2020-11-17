import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-left: 20px;
  border: 2px solid blue;
  width: 800px;
  .list {
    padding: 10px;
  }
  .row {
    border-bottom: 1px solid #ebeced;
    text-align: left;
    margin: 5px 0;
    display: flex;
    align-items: center;
  }
  .image {
    margin-right: 10px;
  }
  .content {
    padding: 10px;
  }
`;
