import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  gap: 20px;
`;

export default function Header() {
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
      <Link href="/tweet1">
        <a>Tweet1</a>
      </Link>
      <Link href="/tweet2">
        <a>Tweet2</a>
      </Link>
    </HeaderContainer>
  );
}
