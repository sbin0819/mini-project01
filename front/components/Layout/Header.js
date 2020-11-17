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
      <Link href="/about">
        <a>About</a>
      </Link>
    </HeaderContainer>
  );
}
