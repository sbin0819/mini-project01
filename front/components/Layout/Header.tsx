import Link from 'next/link';
import { Menu, Dropdown, Button } from 'antd';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  gap: 20px;
`;

export default function Header() {
  const accountMenu = (
    <Menu>
      <Menu.Item>
        <Link href="/account/input1">
          <a>Input1</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/account/input2">
          <a>Input2</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderContainer>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/book">
        <a>Book</a>
      </Link>
      <Link href="/static">
        <a>Static</a>
      </Link>
      <Link href="/tweet/tweet1">
        <a>Tweet1</a>
      </Link>
      <Link href="/tweet/tweet2">
        <a>Tweet2</a>
      </Link>
      <Link href="/tutorial">
        <a>Tutorial</a>
      </Link>
      <Link href="/swr">
        <a>swr</a>
      </Link>
      <Link href='/play'>
        <a>Play</a>
      </Link>
      <Dropdown overlay={accountMenu} placement="bottomLeft">
        <Button>account</Button>
      </Dropdown>
    </HeaderContainer>
  );
}
